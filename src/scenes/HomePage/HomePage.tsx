import { Hero, Section, SectionList, Container, Form } from "./components";
import React, { lazy } from "react";

const sections = Array(10)
  .fill(null)
  .map((_, i) => i);

export default () => {
  return (
    <>
      <Hero />
      <Container>
        <SectionList>
          {sections.map((section) => (
            <Section key={section}></Section>
          ))}
        </SectionList>
        <Form />
      </Container>
    </>
  );
};
