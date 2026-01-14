"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";

// Main Container
const Container = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: white;
  max-width: 64rem;
  margin: 0 auto;
`;

// Page Title
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3.5rem;
  background: linear-gradient(to right, #00d4ff, #ff006e, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

// Timeline Wrapper
const Timeline = styled.div`
  position: relative;
  margin: 60px auto;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 25px;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(#00d4ff, #ff006e, #8338ec);
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    padding-left: 0;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

// Timeline Item
const TimelineItem = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: 50px 0;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 40px;
    margin-left: ${props => props.$isLeft ? '0' : '50%'};
  }
`;

// Card Container
const Card = styled.div`
  background: rgba(var(--card-bg), 0.2);
  backdrop-filter: blur(14px);
  // border: 1px solid rgba(var(--card-bg), 0.2);
  padding: 24px;
  border-radius: 20px;
  color: var(--text);
`;

// Title Dot
const Dot = styled.div`
  position: absolute;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 20px #ff006e;
  left: -32px;

  @media (min-width: 768px) {
    left: ${props => props.$isLeft ? 'auto' : '-52px'};
    right: ${props => props.$isLeft ? '-52px' : 'auto'};
  }
`;

// Company Name
const CompanyName = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
`;

// Period Text
const Period = styled.p`
  color: #fbb6ce;
  font-weight: 600;
  margin-top: 0.5rem;
`;

// Role Text
const Role = styled.p`
  color: var(--text-dim);
  margin-top: 0.25rem;
`;

// Details List
const DetailsList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 1rem;
  color: var(--text-dim);

  li {
    margin-bottom: 0.5rem;
  }
`;

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <Container>
        <Title>Projects</Title>

        <Timeline>
          {content.experience.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <TimelineItem
                key={index}
                $isLeft={isLeft}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card>
                  <Dot $isLeft={isLeft} />
                  <CompanyName>{job.company}</CompanyName>
                  <Period>{job.period}</Period>
                  <Role>{job.role}</Role>

                  <DetailsList>
                    {job.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </DetailsList>
                </Card>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </PageWrapper>
  );
}