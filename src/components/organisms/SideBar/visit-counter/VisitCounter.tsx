"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { useVisitCounter } from "./useVisitCounter";
import { useEffect } from "react";
import WidgetFull from "components/molecules/Widget/WidgetFull";

export const VisitCounter = () => {
  const { isLoading, visits, loadVisits } = useVisitCounter();

  useEffect(() => {
    loadVisits();
  }, []);

  if (isLoading) {
    return <></>;
  }
  const digits = visits.toString().split("").map(Number);

  return (
    <WidgetFull dataTestId="visit-counter" title="Licznik odwiedzin">
      <Container>
        <Typography color="white">Licznik odwiedzin</Typography>
        <VisitCounterContent>
          {digits.map((digit, index) => (
            <NumberCard>
              <Typography key={index}>{digit}</Typography>
            </NumberCard>
          ))}
        </VisitCounterContent>
      </Container>
    </WidgetFull>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(46, 104, 150);
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
`;

const NumberCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`;

const VisitCounterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  border-radius: 8px;
  margin: auto;
`;
