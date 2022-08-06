import React, { Component } from 'react';
console.log(React.createRef());
class Form extends Component <any>{
    initialState: { name: string; job: string; };
    constructor(props: any) {
        console.log(props);
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        console.log(this);
        const { name, job }:any = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}
export default Form