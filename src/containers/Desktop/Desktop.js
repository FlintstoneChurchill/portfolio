import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import './Desktop.css';
import Modal from "../../components/UI/Modal/Modal";
import data from '../../components/data';

class Desktop extends Component {
    state = {
        modals: {},
    };

    openModal = (e, id) => {
        e.preventDefault();
        let modals = {...this.state.modals};
        let index = data.findIndex(m => m.id === id);
        let modal = data[index];
        if (!(id in modals)) {
            modals[id] = {title: modal.title, active: true, isFullScreen: false};
            this.setState({modals});
        } else {
            alert('window is already opened')
        }
    };
    closeModal = (id) => {
        let modals = {...this.state.modals};
        delete modals[id];
        console.log(modals[id])
        this.setState({modals});
    };
    modalActiveHandler = (id) => {
        let modals = {...this.state.modals};
        for (let modal in modals) {
            let modalCopy = {...modals[modal]};
            modalCopy.active = id === modal;
            modals[modal] = modalCopy;
        }
        this.setState({modals})
    };

    toggleFullScreenHandler = (id) => {
        let modals = {...this.state.modals};
        let modal = {...modals[id]};
        modal.isFullScreen = !modal.isFullScreen;
        modals[id] = modal;
        this.setState({modals});
    };

    render() {
        let modals = Object.keys(this.state.modals);
        return (
            <Fragment>
                <Header/>
                {modals.map(modalId => {
                    return <Modal title={this.state.modals[modalId].title}
                                  key={modalId}
                                  closed={() => this.closeModal(modalId)}
                                  active={() => this.modalActiveHandler(modalId)}
                                  isActive={this.state.modals[modalId].active}
                                  isFullScreen={this.state.modals[modalId].isFullScreen}
                                  toggleFullScreen={() => this.toggleFullScreenHandler(modalId)}
                    />
                })}
                <Footer data={this.data} opened={this.openModal}/>
            </Fragment>
        );
    }
}

export default Desktop;