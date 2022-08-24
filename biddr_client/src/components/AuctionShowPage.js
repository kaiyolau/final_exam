import AuctionDetails from "./AuctionDetails";
// import AnswerList from "./AnswerList";
import { useState, useEffect } from 'react';
import { Auction } from '../requests';

export default function AuctionShowPage(props) {

  const [ auction, setAuction] = useState({})


    useEffect(() => {

      console.log(props.match.params.id)
      Auction.show(props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
      .then((fetchedAPIauction) => {
        setAuction(fetchedAPIauction)
      })
    }, [])


//   const deleteTheAnswer = id => {
//     const {answers, ...rest} = auction;
//     setAuction({

//         answers: answers.filter(a => a.id !== id),
//         ...rest

//     })
//   }


    const { title, description, author} = auction
    return(
      <div>
        <AuctionDetails
          title={title}
          description={description}
          author={author}
          />
          {/* <button onClick={()=>{delete()}}>Delete The Auction</button> */}

        {/* <AnswerList
        list={
          auction.answers
        }
        deleteTheAnswer={(id) => deleteTheAnswer(id)}
         /> */}

      </div>
    )

}
