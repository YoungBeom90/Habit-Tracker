import React, { memo, useRef } from 'react';

const Habitaddform = memo((props) => {
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className='add-form' onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className='add-button'>Add</button>
        </form>
    );
})

export default Habitaddform;


// class HabitAddForm extends PureComponent {
//     formRef = React.createRef();
//     inputRef = React.createRef();

    // onSubmit = event => {
    //     event.preventDefault();
    //     const name = this.inputRef.current.value;
    //     name && this.props.onAdd(name);
    //     // this.inputRef.current.value = '';
    //     this.formRef.current.reset();
    // }

//     render() {
//         return (
//             <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
//                 <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
//                 <button className='add-button'>Add</button>
//             </form>
//         );
//     }
// }

// export default HabitAddForm;
