import React from 'react';

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit, delectus ex reiciendis maxime dolorem earum, quos quas, quaerat consectetur eos exercitationem perferendis sed blanditiis distinctio minima obcaecati consequuntur dolore!</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Noteitem;
