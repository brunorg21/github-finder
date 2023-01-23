import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Form = styled.div`
  background-color: #306799;
  padding: 25px;
  border-radius: 5px;
`;

export const Text = styled.h2`
  color: #fff;
  margin-bottom: 45px;
  font-size: 50px;
`;

export const Subtitle = styled.h3`
  margin-bottom: 15px;
  font-size: 25px;
`;

export const Input = styled.input`
  padding: 8px;
  width: 230px;
  height: 35px;
  outline: 0;
  /* border: 2px solid #0e1129; */
`;

export const Button = styled.button`
  padding: 3px;
  height: 34px;
  margin-left: 5px;
  width: 40px;
  color: white;
  background-color: black;
  &:hover {
    background-color: #5faaef;
    color: black;
  }
  border: 0;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center;
  text-align: center; */
  margin-top: 20px;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NameContent = styled.span`
  display: flex;
  font-weight: bold;
  margin-top: 15px;
  font-size: 20px;
`;

export const ReposNumber = styled.span`
  position: relative;
  bottom: 10px;
  margin-left: 5px;
  font-weight: bold;
`;

export const UserName = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const White = styled.div`
  background-color: white;
  margin-right: 20px;
  padding: 4px;
  border-radius: 5px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RepoButton = styled.button`
  padding: 10px;
  width: 200px;
  font-size: 20px;
  background-color: #04125c;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: black;
  }
`;

export const Icon = styled.span`
  margin-right: 5px;
  position: relative;
  top: 2px;
`;
