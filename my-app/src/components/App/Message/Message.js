import React from 'react';
import Button from '../../Button/Button';
import '../../../CSS/animation.css'
import './Message.css'

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    render() {
        return (
            <section>
                <div className="modal" id="modal">
                    <div className="modal-content">
                        <p className="close" onClick={this.closeModal}>&times;</p>
                        <form>
                            <input type="text" name="Youre Name" placeholder="Youre Name" />
                            <input type="email" name="Youre e-mail address" placeholder="Youre e-mail address" />
                            <Button text="Contact sales" />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Message;