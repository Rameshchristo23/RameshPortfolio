"use client";
import styled, { keyframes } from "styled-components";
import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";
import { Code, Lightbulb, Languages } from "lucide-react";

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Container = styled.div`
  padding: 8rem 1.5rem 5rem;
  color: white;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
`;

const BackgroundOrbs = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.25;
  z-index: 0;
`;

const Orb = styled.div`
  position: absolute;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  filter: blur(90px);
  animation: ${pulse} 5s ease-in-out infinite;

  &:nth-child(1) {
    top: 10%;
    right: -10rem;
    background: #00d4ff;
  }

  &:nth-child(2) {
    top: 60%;
    left: -10rem;
    background: #ff006e;
    animation-delay: 1.5s;
  }

  &:nth-child(3) {
    bottom: 10%;
    right: 20%;
    background: #8338ec;
    animation-delay: 3s;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
`;

const HeaderSection = styled.div`
  margin-bottom: 3.5rem;
  animation: ${fadeInUp} 0.8s ease-out;
  text-align: center;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  background: linear-gradient(to right, rgba(0, 212, 255, 0.2), rgba(255, 0, 110, 0.2), rgba(131, 56, 236, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  svg {
    width: 1rem;
    height: 1rem;
    color: #00d4ff;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    background: linear-gradient(to right, #00d4ff, #ff006e, #8338ec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  background: linear-gradient(to right, #00d4ff, #ff006e, #8338ec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const SkillCard = styled.div`
  position: relative;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$index * 0.05}s both;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -200%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 212, 255, 0.1),
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 
      0 20px 40px -12px rgba(0, 212, 255, 0.3),
      0 0 30px rgba(0, 212, 255, 0.2);
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(131, 56, 236, 0.1));

    &::before {
      left: 200%;
    }
  }

  &:active {
    transform: translateY(-4px) scale(0.98);
  }
`;

const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #ff006e;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    background: linear-gradient(to right, #ff006e, #8338ec);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const LanguagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
`;

const LanguageTag = styled.span`
  position: relative;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.2}s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 2px;
    background: linear-gradient(135deg, #00d4ff, #ff006e, #8338ec);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px -10px rgba(255, 0, 110, 0.4);
    color: #ff006e;

    &::before {
      opacity: 1;
    }
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  opacity: 0.1;
  animation: ${float} 4s ease-in-out infinite;
  pointer-events: none;

  svg {
    width: 4rem;
    height: 4rem;
    color: ${props => props.$color || '#00d4ff'};
  }

  &:nth-child(1) {
    top: 10%;
    right: 5%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    bottom: 20%;
    left: 5%;
    animation-delay: 1s;
  }
`;

export default function SkillsPage() {
  return (
    <PageWrapper>
      <Container>
        <BackgroundOrbs>
          <Orb />
          <Orb />
          <Orb />
        </BackgroundOrbs>

        <FloatingIcon $color="#00d4ff">
          <Code />
        </FloatingIcon>
        <FloatingIcon $color="#8338ec">
          <Lightbulb />
        </FloatingIcon>

        <Content>
          <HeaderSection>
            <Badge>
              <Code />
              <span>Technical Expertise</span>
            </Badge>
            <Title>SKILLS</Title>
          </HeaderSection>

          <SkillsGrid>
            {content.skills.map((skill, index) => (
              <SkillCard key={index} $index={index}>
                {skill}
              </SkillCard>
            ))}
          </SkillsGrid>

          <SectionDivider>
            <SectionHeader>
              <Languages />
              <h2>Languages</h2>
            </SectionHeader>
          </SectionDivider>

          <LanguagesContainer>
            {content.languages.map((lang, i) => (
              <LanguageTag key={i} $index={i}>
                {lang}
              </LanguageTag>
            ))}
          </LanguagesContainer>
        </Content>
      </Container>
    </PageWrapper>
  );
}