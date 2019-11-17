import React from 'react';
import styled from 'styled-components';


const InterestList = styled.ul`
  display: grid;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  ${'' /* grid-gap: 2rem; */}
  grid-template-columns: repeat(7, 1fr);
  overflow-y: auto;
  @media(max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    grid-gap: 1.5rem;
  }
  li{
    color: white;
    font-size: 1.2rem;
    label {
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
        border: 2px solid #91CB3E;
        z-index: 100;
        &::after {
          content: "";
          position: absolute;
          display: none;
        }
      }
      input:checked ~ span {
        background: var(--color-gradient);
        border: none;
      }

      &:hover {
        input ~ & {
          span {
          background-color: #ccc;
          }
        }
      }

      input:checked ~ span::after{
          display: block;
      }

      span {
        &::after {
          left: 7px;
          right: 7px;
          top: 3px;
          bottom: 8px;
          width: 3px;
          height: 9px;
          border: solid white;
          border-width: 0 2.5px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    };
  }
`;

const ImageContainer = styled.div`
  width: 12rem;
  height: 9rem;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  float: left;
  text-align: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  };
  @media(max-width: 600px) {
    width: 9rem;
    height: 6rem;
  }
`;


const CustomImageSelection = ({ interests, getSelectedValue }) => {

    const getCheckedValues = () => {
        const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
        const values = [];
        checkboxes.forEach((element) => {
          values.push(element.value);
        });
    }

    const handleCheck = (e) => {
        const value = e.target.value;
        console.log(value);
        //getSelectedValue(value)
    }
    
    return (
        <div className="wrapper">
            <div>
                <InterestList>
                    {
                        interests.map((interest)=>(
                            <li key={interest.id}>
                                <label className="container">
                                    <ImageContainer img={`https://res.cloudinary.com/betachop/image/upload/v1572997265/tellear/${interest.name}.png`}>
                                    {
                                        interest.name[0].toUpperCase() + interest.name.slice(1)
                                    }
                                        <input type="checkbox" name={`interest-${interest.name}`} value={interest.name} onChange={handleCheck}/>
                                    <span />
                                    </ImageContainer>
                                </label>
                            </li>
                        ))
                    }
                </InterestList>
            </div>
        </div>
    )
}


export default CustomImageSelection;