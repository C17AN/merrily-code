import React from "react";
import styled from "@emotion/styled";
import Title from "components/Portfolio/common/Title";
import InfoList from "../common/InfoList";
import ActivityData from "data/about/ActivityData";

const Activity = () => {
  return (
    <Container>
      <Title title="Other Activities" iconPath={"/icons/activity.gif"} />
      <InfoList itemList={ActivityData} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

export default Activity;
