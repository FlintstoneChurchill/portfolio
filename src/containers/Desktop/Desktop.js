import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import './Desktop.css';
import Modal from "../../components/UI/Modal/Modal";

class Desktop extends Component {
    state = {
        modals: [],
    };

    data = [
        {title: 'Услуги', img: 'img/mac-app-store.png', id: 'services'},
        {title: 'Портфолио', img: 'img/gallery.png', id: 'portfolio'},
        {title: 'Наши работники', img: 'img/Workers.png', id: 'workers'},
        {title: 'Наша история', img: 'img/ICal.png', id: 'history'},
        {title: 'Наши контакты', img: 'img/contacts-icon.png', id: 'contacts'},
        {title: 'Как нас найти', img: 'img/map-icon.ico', id: 'location'},
        {title: 'Связаться с нами', img: 'img/logo_1.png', id: 'call'},
        {title: 'Настройки страницы', img: 'img/Settings.ico', id: 'settings'},
        {title: 'Помощь по сайту', img: 'img/help.ico', id: 'help'}
    ];

    openModal = (e, id) => {
        e.preventDefault();
        let index = this.data.findIndex(m => m.id === id);
        let modals = [...this.state.modals];
        let modal = {...this.data[index]};
        modals.push({title: modal.title, id: Date.now(), active: true, fullScreen: false});
        this.setState({modals});
    };
    closeModal = (e, id) => {
        e.preventDefault();
        let index = this.state.modals.findIndex(m => m.id === id);
        let modals = [...this.state.modals];
        modals.splice(index, 1);
        console.log(index);
        this.setState({modals});
    };
    modalActiveHandler = (id) => {
        this.setState((state) => {
            let modals = [...state.modals];
            modals.forEach((modal, i) => {
                let modalCopy = {...modal};
                modalCopy.active = modal.id === id;
                modals[i] = modalCopy;
            });
            return {modals}
        });
    };

    toggleFullScreenHandler = (id) => {

    };

    render() {
        return (
            <Fragment>
                <Header/>
                {this.state.modals.map((modal, i) => {
                    return <Modal title={modal.title}
                                  key={`${modal.id}_${i}`}
                                  closed={(e) => this.closeModal(e, modal.id)}
                                  active={() => this.modalActiveHandler(modal.id)}
                                  isActive={modal.active}
                    />
                })}
                <Footer data={this.data} opened={this.openModal}/>
            </Fragment>
        );
    }
}

export default Desktop;