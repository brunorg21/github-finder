import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RepoContainer = styled.div`
  margin-top: 20px;
  background-color: #0c74ad;
  width: 500px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #79b3ff;
  font-size: 70px;
  margin-left: 30px;
`;

export const ProjectName = styled.h3`
  font-weight: bold;
  margin-bottom: 25px;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  border-bottom: 3px solid black;
`;

export const Name = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 25px;
  margin-top: 20px;
`;

export const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 270px;
  border-bottom: 1px solid black;
  margin-top: 10px;
`;

// export const Button = styled.button`
//   width: 170px;
//   background-color: #306799;
//   padding: 10px;
//   font-size: 18px;
//   margin-top: 10px;
//   margin-bottom: 15px;
//   font-weight: bold;
//   border-radius: 10px;
//   &:hover {
//     color: white;
//     background-color: #063068;
//   }
//   border: none;
// `;

export const Language = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserProfile = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  background-color: #306799;
  padding: 10px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    color: white;
    background-color: #063068;
  }
  border: none;
  text-decoration: none;
  color: white;
`;

export const LanguageContainer = styled.div`
  position: relative;
  bottom: 30px;
  left: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin-left: 10px;
  color: white;
  right: 70px;
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const HomeButton = styled.button`
  background-color: black;
  padding: 15px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  &:hover {
    background-color: #072e61;
  }
`;
