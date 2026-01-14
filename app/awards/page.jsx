"use client";
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  min-height: 100vh;
//   background: #0a0a0a;
  padding: 100px 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 105, 180, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 90%, rgba(0, 212, 255, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  letter-spacing: -2px;
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  color: var(--text);
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto 80px;
  position: relative;
  z-index: 1;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.gradient};
    transform: scaleX(0);
    transform-origin: left;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    background: ${props => props.gradient};
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease;
  }
  
  &:hover::after {
    opacity: 0.15;
  }
`;

const StatNumber = styled.div`
  font-size: 56px;
  font-weight: 800;
  background: ${props => props.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
`;

const StatLabel = styled.div`
  color: var(--text);
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const AchievementCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 35px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, ${props => props.accentColor}, transparent 30%);
    animation: rotate 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 0.5;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CardInner = styled.div`
  position: relative;
  z-index: 1;
//   background: rgba(10, 10, 10, 0.8);
  border-radius: 20px;
  padding: 5px;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: ${props => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;
  box-shadow: 0 10px 30px ${props => props.shadowColor};
`;

const AchievementTitle = styled.h3`
  color: var(--text);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const AchievementDescription = styled.p`
  color: var(--text);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: ${props => props.bgColor};
  color: #000;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 7px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const stats = [
  { number: '150+', label: 'Projects Completed', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { number: '50K+', label: 'Active Users', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { number: '98%', label: 'Client Satisfaction', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { number: '25+', label: 'Industry Awards', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' }
];

const achievements = [
  {
    icon: '🏆',
    title: 'Best Innovation Award 2024',
    description: 'Recognized for groundbreaking solutions in AI-powered automation and digital transformation.',
    badges: ['Technology', 'Innovation'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    accentColor: 'rgba(102, 126, 234, 0.8)',
    shadowColor: 'rgba(102, 126, 234, 0.4)'
  },
  {
    icon: '🚀',
    title: 'Fastest Growing Startup',
    description: 'Achieved 300% year-over-year growth and expanded to 15 countries across 3 continents.',
    badges: ['Growth', 'Global'],
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    accentColor: 'rgba(240, 147, 251, 0.8)',
    shadowColor: 'rgba(240, 147, 251, 0.4)'
  },
  {
    icon: '⭐',
    title: 'Top Rated Service Provider',
    description: 'Maintained 4.9/5 star rating across all platforms with over 10,000 verified reviews.',
    badges: ['Excellence', 'Customer'],
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    accentColor: 'rgba(79, 172, 254, 0.8)',
    shadowColor: 'rgba(79, 172, 254, 0.4)'
  },
  {
    icon: '💎',
    title: 'Industry Leader Recognition',
    description: 'Featured in Forbes 30 Under 30 and TechCrunch for disrupting traditional business models.',
    badges: ['Leadership', 'Media'],
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    accentColor: 'rgba(67, 233, 123, 0.8)',
    shadowColor: 'rgba(67, 233, 123, 0.4)'
  },
  {
    icon: '🎯',
    title: 'Sustainability Champion',
    description: 'Achieved carbon neutral operations and reduced environmental impact by 85% through green initiatives.',
    badges: ['Environment', 'Impact'],
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    accentColor: 'rgba(250, 112, 154, 0.8)',
    shadowColor: 'rgba(250, 112, 154, 0.4)'
  },
  {
    icon: '🌟',
    title: 'Excellence in Customer Experience',
    description: 'Pioneered 24/7 AI-assisted support achieving 2-minute average response time and 95% first-contact resolution.',
    badges: ['Service', 'AI'],
    gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
    accentColor: 'rgba(168, 237, 234, 0.8)',
    shadowColor: 'rgba(168, 237, 234, 0.4)'
  }
];

const AchievementPage = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statCardsRef = useRef([]);
  const achievementCardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(headerRef.current.children, {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animate stat cards
      statCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            onEnter: () => animateCounter(index)
          }
        });

        tl.to(card, {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: index * 0.1
        })
        .to(card.querySelector('::before') || card, {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.inOut'
        }, '-=0.4');
      });

      // Animate achievement cards
      achievementCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: index * 0.1
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const animateCounter = (index) => {
    const target = stats[index].number;
    const isPercentage = target.includes('%');
    const hasPlus = target.includes('+');
    const hasK = target.includes('K');
    
    let numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
    
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(interval);
      }
      
      let displayValue = Math.floor(current).toString();
      if (hasK) displayValue += 'K';
      if (hasPlus) displayValue += '+';
      if (isPercentage) displayValue += '%';
      
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = displayValue;
        return newCounts;
      });
    }, duration / steps);
  };

  return (
    <Container>
      <Header ref={headerRef}>
        <Title>Our Achievements</Title>
        <Subtitle>Celebrating milestones and recognitions that define our journey of excellence</Subtitle>
      </Header>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            ref={el => statCardsRef.current[index] = el}
            gradient={stat.gradient}
          >
            <StatNumber gradient={stat.gradient}>
              {counts[index] || stat.number}
            </StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            ref={el => achievementCardsRef.current[index] = el}
            accentColor={achievement.accentColor}
          >
            <CardInner>
              <IconWrapper 
                gradient={achievement.gradient}
                shadowColor={achievement.shadowColor}
              >
                {achievement.icon}
              </IconWrapper>
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDescription>{achievement.description}</AchievementDescription>
              <BadgeContainer>
                {achievement.badges.map((badge, i) => (
                  <Badge key={i} bgColor={achievement.gradient}>
                    {badge}
                  </Badge>
                ))}
              </BadgeContainer>
            </CardInner>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </Container>
  );
};

export default AchievementPage;