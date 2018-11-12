import React, { Component } from 'react';
import '../style.css'

class PeopleList extends Component {
    render() {
        return (
            <div className="people-list">
                <ul className="list">
                    <li className="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status">
                                <i class="fa fa-circle online"></i> online
                        </div>
                        </div>
                    </li>
                    <li className="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status">
                                <i class="fa fa-circle online"></i> online
                        </div>
                        </div>
                    </li>
                    <li className="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status">
                                <i class="fa fa-circle online"></i> online
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PeopleList;