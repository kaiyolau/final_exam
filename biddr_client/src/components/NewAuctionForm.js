import React from 'react';
// import FormErrors from './FormErrors';

const NewAuctionForm = props => {

    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd.get("title"), fd.get("description"))
        props.submitForm(
            {
                title: fd.get("title"),
                body: fd.get("description"),
                created_at: new Date(),
                id: 5
            }
        )

        event.currentTarget.reset()

    }

    return(
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" />
                {/* <FormErrors forField="title" errors={props.errors} /> */}
            </div>
            <div>
                <label htmlFor="description">description</label>
                <br />
                <input type="text" name="description" id="" />
                {/* <FormErrors forField="description" errors={props.errors} /> */}
            </div>
            <div>
                <input type="submit" value="Create Auction" />
            </div>

        </form>
    )


}

export default NewAuctionForm;
