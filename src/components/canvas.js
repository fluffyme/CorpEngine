import React, { Component } from 'react';

export default class MyCanvas extends Component {
    render() {
        const canvas = document.getElementById();
        const ctx = canvas.getContext("2d")
        return (
            <canvas className="canvas">
             {...ctx}   
            </canvas>
        );
    }
}