import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from'../img/check.svg';
import checkCompleteImg from'../img/check-complete.svg';

class TodoItem extends Component {
    render(){

        const {item, onClick} = this.props;
        let url = checkImg;
        if (item.isComplete){
            url = checkCompleteImg;
        }
        return(
            <div onClick={onClick} className={classNames('TodoItem', {'TodoItem-complete': item.isComplete})}>
               
               <img scr={url} />
                <p>{this.item.title}</p>
            </div>
        );
    }
}
export default TodoItem;