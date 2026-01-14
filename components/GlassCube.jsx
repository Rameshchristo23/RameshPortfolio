"use client";
import styled, { keyframes } from "styled-components";

// === Animations ===
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const GlassWrapper = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  @media (min-width: 1024px) {
    height: 600px;
  }
`;

const CubeContainer = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  animation: ${float} 6s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
`;

const ShapeMain = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  transform: rotate(12deg);
  z-index: 20;
  background: linear-gradient(135deg, rgb(142 130 155 / 40%), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
`;

const ShapeBack = styled.div`
  position: absolute;
  inset: -1rem;
  border-radius: 2rem;
  transform: rotate(-6deg) scale(0.9);
  z-index: -10;
  background: rgba(127,13,242,0.1);
  filter: blur(6px);
`;

const FloatParticle = styled.div`
  position: absolute;
  border-radius: ${({ rounded }) => rounded || "1rem"};
  background: linear-gradient(
    135deg,
    rgba(127, 13, 242, 0.4),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(20px);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

const Inner = styled.div`
  position: absolute;
  inset: 0rem;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Match the clipping shape */
  overflow: hidden;
  border-radius: 2rem;
  transform: rotate(12deg);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    bottom: -10%;

    /* Reverse rotation so image stays upright */
    transform: rotate(-12deg);
  }
`;


export default function GlassCube({ image }) {
  return (
    <GlassWrapper>
      <CubeContainer>
        <ShapeMain />
        <ShapeBack />

        {/* Top-right floating ball */}
        <FloatParticle
          style={{ top: "-40px", right: "-40px", width: "60px", height: "60px" }}
          rounded="50%"
          delay="1s"
        />

        {/* Bottom-left floating square */}
        <FloatParticle
          style={{ bottom: "-20px", left: "-50px", width: "80px", height: "80px" }}
          rounded="1rem"
          delay="2s"
        />

        <Inner>
          <img src={image} alt="Profile" />
        </Inner>
      </CubeContainer>
    </GlassWrapper>
  );
}
