"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
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

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  // background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  padding: 8rem 1.5rem 5rem;
`;

const ContentWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 3.5rem;
  background: linear-gradient(90deg, #00d4ff, #ff006e, #8338ec, #00d4ff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 4s ease infinite, ${fadeInUp} 0.8s ease;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  animation: ${fadeInUp} 0.8s ease 0.2s both;
`;

const InfoCard = styled.div`
  background: rgba(var(--card-bg), 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  font-size: 1.125rem;
  color: var(--text);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease ${props => props.delay || '0s'} both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(0, 212, 255, 0.5);
    transform: translateX(10px);
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.2);
  }
  
  strong {
    color: #00d4ff;
    margin-right: 0.5rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2.5rem;
  animation: ${fadeInUp} 0.8s ease 0.6s both;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background: rgba(var(--card-bg), 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(var(--text-dim), 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  background: rgba(var(--card-bg), 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text);
  font-size: 1rem;
  min-height: 10rem;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(var(--text-dim), 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: linear-gradient(90deg, #00d4ff, #ff006e, #8338ec);
  background-size: 200% auto;
  border: none;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  
  &:hover {
    animation: ${gradientShift} 2s ease infinite;
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(0, 212, 255, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const FloatingDecoration = styled.div`
  position: fixed;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: 0.1;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  filter: blur(40px);
  pointer-events: none;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    personal: {
      name: "Ramesh",
      phone: "+91 (735) 843-7188",
      email: "rameshchristo33@gmail.com",
      location: "Chennai, India"
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Try again.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong!");
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <ToastContainer position="top-right" autoClose={3000} />
      <FloatingDecoration size={300} color="#00d4ff" top={10} left={10} duration={6} delay={0} />
      <FloatingDecoration size={250} color="#ff006e" top={60} left={80} duration={8} delay={1} />
      <FloatingDecoration size={200} color="#8338ec" top={80} left={20} duration={7} delay={2} />
      
      <ContentWrapper>
        <Title>CONTACT</Title>
        
        <InfoSection>
          <InfoCard delay="0.3s">
            <strong>Name:</strong> {content.personal.name}
          </InfoCard>
          <InfoCard delay="0.4s">
            <strong>Phone:</strong> {content.personal.phone}
          </InfoCard>
          <InfoCard delay="0.5s">
            <strong>Email:</strong> {content.personal.email}
          </InfoCard>
          <InfoCard delay="0.6s">
            <strong>Location:</strong> {content.personal.location}
          </InfoCard>
        </InfoSection>
        
        <FormContainer>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="button" onClick={handleSubmit}>
            Send Message
          </SubmitButton>
        </FormContainer>
      </ContentWrapper>
    </PageContainer>
  );
}