
"use client";
import styled, { keyframes } from "styled-components";
import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";
import { User, Briefcase, Phone, Mail, MapPin } from "lucide-react";

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

const Container = styled.div`
  padding: 8rem 1.5rem 5rem;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

const BackgroundOrbs = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.3;
  z-index: 0;
`;

const Orb = styled.div`
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  filter: blur(80px);
  animation: ${pulse} 4s ease-in-out infinite;

  &:nth-child(1) {
    top: 25%;
    left: -12rem;
    background: #00d4ff;
  }

  &:nth-child(2) {
    top: 50%;
    right: -12rem;
    background: #ff006e;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    bottom: 25%;
    left: 50%;
    background: #8338ec;
    animation-delay: 2s;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 64rem;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Badge = styled.div`
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  background: linear-gradient(to right, rgba(0, 212, 255, 0.2), rgba(255, 0, 110, 0.2), rgba(131, 56, 236, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

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
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #00d4ff, #ff006e, #8338ec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const ProfileCard = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 212, 255, 0.2);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.8;
    color: #e5e7eb;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease-out ${props => 0.4 + props.$index * 0.1}s both;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 0 20px 40px -12px rgba(0, 212, 255, 0.2);
  }
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: linear-gradient(to bottom right, rgba(0, 212, 255, 0.2), rgba(131, 56, 236, 0.2));
  transition: all 0.3s ease;

  ${InfoCard}:hover & {
    background: linear-gradient(to bottom right, rgba(0, 212, 255, 0.3), rgba(131, 56, 236, 0.3));
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #00d4ff;
    transition: transform 0.3s ease;
  }

  ${InfoCard}:hover & svg {
    transform: scale(1.1);
  }
`;

const InfoText = styled.div`
  flex: 1;
`;

const Label = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.25rem;
`;

const Value = styled.p`
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  font-weight: 600;
  color: white;
`;

const Divider = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;

  div {
    height: 0.25rem;
    width: 8rem;
    border-radius: 9999px;
    background: linear-gradient(to right, #00d4ff, #ff006e, #8338ec);
  }
`;

export default function AboutPage() {
  const personalInfo = [
    { icon: User, label: "Name", value: content.personal.name },
    { icon: Briefcase, label: "Role", value: content.personal.role },
    { icon: Phone, label: "Phone", value: content.personal.phone },
    { icon: Mail, label: "Email", value: content.personal.email },
    { icon: MapPin, label: "Location", value: content.personal.location },
  ];

  return (
    <PageWrapper>
      <Container>
        <BackgroundOrbs>
          <Orb />
          <Orb />
          <Orb />
        </BackgroundOrbs>

        <Content>
          <HeaderSection>
            <Badge>
              <span>Get To Know Me</span>
            </Badge>
            <Title>ABOUT ME</Title>
          </HeaderSection>

          <ProfileCard>
            <p>{content.profile}</p>
          </ProfileCard>

          <InfoGrid>
            {personalInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <InfoCard key={index} $index={index}>
                  <InfoContent>
                    <IconWrapper>
                      <Icon />
                    </IconWrapper>
                    <InfoText>
                      <Label>{item.label}</Label>
                      <Value>{item.value}</Value>
                    </InfoText>
                  </InfoContent>
                </InfoCard>
              );
            })}
          </InfoGrid>

          <Divider>
            <div />
          </Divider>
        </Content>
      </Container>
    </PageWrapper>
  );
}