import React from 'react';

const Qstn = () => {
    return (
        <div>
            <div>
                <h3>Question: Props vs State Difference?</h3>

                <p>Ans: Props and state are both plain Javascript objects. They are different in one important way like props get
                    passed to the component, where state is managed within the component. State is limited in current component but
                    props can be pass to any component which user want. Props are set by parent and passed to child components and they
                    are fixed throughout the component. For changing the data, we have to use state. Props are immutable where state is
                    mutable.</p>
            </div>
            <h3>Question: How React Work?</h3>

            <p>
                Ans: React is a declarative and flexible javascript library for building user interfaces. Today many startups choose react as
                their tool for building fast front-end side application for their project. React implements a virtual DOM that is
                basically a DOM tree representation in javascript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
            </p>
            <div>

            </div>

        </div>
    );
};

export default Qstn;