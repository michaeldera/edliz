import React from 'react';
import { Link } from "react-router-dom";
import MainMenu from '../MainMenu/MainMenu'
import './information.css';
import { book } from '../../Data/data'
import { inject, observer } from "mobx-react/index";
import { toJS } from "mobx/lib/mobx";

class Information extends React.PureComponent {
  render() {
    const {
      toggleNavigationPanel,
      navigation,
    } = toJS(this.props.EdlizStore)

    return (
      <div>
        <MainMenu
          toggle={toggleNavigationPanel}
          navigation={navigation}
        />
        <div className="information">
          <div className="jump">Jump to Section</div>
          <div>
            <ul>
              {book.contents.pre.map((elem, index, array) =>
               <li>
                 <a href={"#" + elem.short_title} key={index}>{elem.short_title}</a>
               </li>
              )}
            </ul>
          </div>
          {book.contents.pre.map((elem, index, array) =>
              <section id={elem.short_title} key={index}>
                {elem.content}
                <br/>
                <a href="#info-top">back to top</a>
              </section>
            )}
          </div>
      </div>
    );
  }
}

export default  inject('EdlizStore')(observer(Information))
