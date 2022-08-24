import AuctionDetails from "./AuctionDetails";
import { useState, useEffect } from 'react';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';

export default function AuctionIndexPage() {
    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        Auction.index()
        .then((auctionsData) => {
            setAuctions(auctionsData)
        })
    }, [])
    const deleteAuction = (id) =>{
        console.log(id)
        setAuctions(
            auctions.filter(q => q.id !== id)
        )
    }

    return(
        <>
            <ul>
                {
                auctions.map((q,i) => {
                    return <li key={i}>{q.id} - <Link to={`/items/${q.id}`}>{q.title}</Link> <button onClick={() => { deleteAuction(q.id) }}>Delete</button> </li>
                })
                }
            </ul>
        </>
    )
}
