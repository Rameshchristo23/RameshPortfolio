"use client";
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  min-height: 100vh;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: var(--text);
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--text);
  font-size: 18px;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8));
    transform: scaleX(0);
    transform-origin: left;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const QuoteIcon = styled.div`
  font-size: 48px;
  color: #667eea;
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 15px;
`;

const ReviewText = styled.p`
  color: var(--text);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 25px;
  font-style: italic;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-weight: 600;
  font-size: 20px;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const AuthorRole = styled.p`
  color: var(--text-dim);
  font-size: 14px;
  margin: 0;
`;

const Stars = styled.div`
  color: #fbbf24;
  font-size: 18px;
  margin-left: auto;
`;

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    initial: "SJ",
    text: "This product has completely transformed how we operate. The team's dedication to excellence is evident in every feature. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    initial: "MC",
    text: "Outstanding service and support. The attention to detail and commitment to customer success sets them apart from the competition.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Freelance Designer",
    initial: "EW",
    text: "I've tried many solutions, but this one stands out. It's intuitive, powerful, and the results speak for themselves. Absolutely love it!",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Marketing Director",
    initial: "DR",
    text: "The ROI we've seen has been incredible. This investment paid for itself within the first month. Can't imagine our workflow without it now.",
    rating: 5
  }
];

const TestimonialPage = () => {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and subtitle
      gsap.from(titleRef.current, {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
      });

      gsap.from(subtitleRef.current, {
        duration: 1,
        y: -30,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
      });

      // Animate testimonial cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.to(card, {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: index * 0.15
        })
        .to(card.querySelector('::before') || card, {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.inOut'
        }, '-=0.4');

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            duration: 0.3,
            y: -10,
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            duration: 0.3,
            y: 0,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            ease: 'power2.out'
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <Title ref={titleRef}>What Our Clients Say</Title>
      <Subtitle ref={subtitleRef}>
        Don't just take our word for it - hear from some of our satisfied customers
      </Subtitle>
      
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            ref={el => cardsRef.current[index] = el}
          >
            <QuoteIcon>"</QuoteIcon>
            <ReviewText>{testimonial.text}</ReviewText>
            <AuthorSection>
              <Avatar>{testimonial.initial}</Avatar>
              <AuthorInfo>
                <AuthorName>{testimonial.name}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </AuthorInfo>
              <Stars>{'★'.repeat(testimonial.rating)}</Stars>
            </AuthorSection>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </Container>
  );
};

export default TestimonialPage;