function AuctionDetails(props) {
  return(
    <>
      <h2>{props.title}</h2>
      <p>
        {props.description}
        <br />
      </p>
    </>
  )
}

export default AuctionDetails;
