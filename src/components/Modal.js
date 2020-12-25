import React from "react";

const modal = props => {
    let show = props.show
    let entry = props.entry
    console.log(show, "this is show in modal")
    console.log(entry, "this is entry in modal")

    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
        return (
          <div className={showHideClassName}>
            <section className="modal-main">
               <h1>{entry.user}</h1>
               <h2>{entry.date}</h2>
               <p>{entry.description}</p>
               <button
                                className="btn1"
                                onClick={e => {
                                    console.log(e)
                                    props.close()
                                }}
                            >
                                Close
                    </button>
            </section>
          </div>
        );
};


export default modal;