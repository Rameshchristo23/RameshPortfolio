"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import content from "@/data/content.json";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  padding: 8rem 1.5rem 5rem;
`;

const ContentWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 3.5rem;
  background: linear-gradient(
    90deg,
    #00d4ff,
    #ff006e,
    #8338ec,
    #00d4ff
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 4s ease infinite;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const EducationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const EducationCard = styled.div`
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${props => props.$delay}s;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #ff006e, #8338ec);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      animation: ${shimmer} 1s;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  ${EducationCard}:hover & {
    color: #00d4ff;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Institution = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const Year = styled.p`
  font-size: 0.95rem;
  color: #9ca3af;
  margin-top: ${props => props.$hasInstitution ? '0.25rem' : '0'};
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.6;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.9;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00d4ff, #8338ec);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;

  ${EducationCard}:hover & {
    opacity: 0.6;
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 1.5rem;
    right: 1.5rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default function EducationPage() {
  return (
    <PageContainer>
      <ContentWrapper>
        <Title>EDUCATION</Title>
        
        <EducationGrid>
          {content.education.map((edu, idx) => (
            <EducationCard key={idx} $delay={idx * 0.15}>
              <IconWrapper>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </IconWrapper>

              <DegreeTitle>{edu.degree || edu.year}</DegreeTitle>
              
              {edu.institution && (
                <Institution>{edu.institution}</Institution>
              )}
              
              {edu.year && edu.degree && (
                <Year $hasInstitution={!!edu.institution}>{edu.year}</Year>
              )}

              {edu.description && (
                <Description>{edu.description}</Description>
              )}
            </EducationCard>
          ))}
        </EducationGrid>
      </ContentWrapper>
    </PageContainer>
  );
}