import {useEffect, useState} from "react";
import cards from "../../../../cards.json"
import {Grid} from "@mui/material";

const Card = () => {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const cardList = document.querySelector('.card-list');
        const lastCard = document.querySelectorAll('.card-list .card').length - 1;

        const prependList = () => {
            const slicedCard = Array.from(document.querySelectorAll('.card'))
                .slice(lastCard)
                .forEach((card) => {
                    card.classList.remove('transformThis', 'activeNow');
                    cardList.prepend(card);
                });
        };

        const appendList = () => {
            const slicedCard = Array.from(document.querySelectorAll('.card'))
                .slice(0, 1)
                .forEach((card) => {
                    card.classList.add('transformPrev');
                    card.classList.remove('transformPrev', 'activeNow');

                    cardList.append(card);
                });
        };

        const handleNext = () => {
            const lastCardElement = document.querySelector('.card-list li:last-child');
            const secondLastCardElement = document.querySelector('.card-list li:nth-last-child(2)');

            lastCardElement.classList.remove('transformPrev');
            lastCardElement.classList.add('transformThis');

            secondLastCardElement.classList.remove('previewNow');
            secondLastCardElement.classList.add('activeNow');

            setTimeout(function () {
                prependList();
            }, 150);
        };

        const handlePrev = () => {
            const secondLastCardElement = document.querySelector('.card-list li:nth-last-child(2)');
            const thirdLastCardElement = document.querySelector('.card-list li:nth-last-child(3)');

            secondLastCardElement.classList.remove('activeNow');
            secondLastCardElement.classList.add('previewNow');

            thirdLastCardElement.classList.remove('transformPrev');
            thirdLastCardElement.classList.add('transformThis');
            setTimeout(function () {
                appendList();
            }, 150);
        };

        document.querySelector('.prev').addEventListener('click', handlePrev);
        document.querySelector('.next').addEventListener('click', handleNext);

        return () => {
            document.querySelector('.prev').removeEventListener('click', handlePrev);
            document.querySelector('.next').removeEventListener('click', handleNext);
        }
    }, []);
    return (
        <div className="container">
            <Grid container>
                <Grid xs={8} md={8}>
                    <span className="title"> کیف پول های من</span>
                </Grid>
                <Grid xs={4} md={4} textAlign="left">
                    <button className="buttons next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8 0C2.00043 0 0 2.00043 0 8C0 13.9996 2.00043 16 8 16C13.9996 16 16 13.9996 16 8C16 2.00043 13.9996 0 8 0Z"
                                  fill="#F6F7FA"/>
                            <path d="M6.75253 11.0017L9.76745 7.99975L6.75253 4.9978" stroke="#C3C3C3" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="buttons prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8 0C2.00043 0 0 2.00043 0 8C0 13.9996 2.00043 16 8 16C13.9996 16 16 13.9996 16 8C16 2.00043 13.9996 0 8 0Z"
                                  fill="#F6F7FA"/>
                            <path d="M9.24747 4.99831L6.23255 8.00025L9.24747 11.0022" stroke="#262626"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </Grid>
            </Grid>
            <div className="card-stack">

                <ul className="card-list">

                    {cards.map(item =>
                        <li className="card" style={{backgroundImage: item.backgroundColor}}>
                            <Grid container>
                                <Grid xs={8} md={6} textAlign="right">
                                    <span>  {item.name} </span>
                                </Grid>
                                <Grid xs={4} md={6} textAlign="left">
                                    <span className="logo"></span>
                                </Grid>
                                <Grid xs={8} md={6} textAlign="right">
                                </Grid>
                                <Grid xs={4} md={6} textAlign="left">
                                    <span className="price">  {item.unitPrice + item.price} </span>
                                </Grid>
                            </Grid>
                        </li>
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Card;