import React from 'react';
import MainMenu from '../MainMenu/MainMenu'
import './information.css';
import { book } from '../../Data/data'
import { inject, observer } from "mobx-react/index"
import { toJS } from "mobx/lib/mobx"
import { Link, animateScroll as scroll } from "react-scroll";

class Information extends React.PureComponent {
  scrollToTop = () => {
    scroll.scrollToTop();
  }
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
               <li key={index}>
                 {/*<a href='javascript:;' onClick={() => this.scrollTo(elem.short_title)}>{elem.short_title}</a>*/}
                 <Link
                   activeClass="active"
                   className="link"
                   to={elem.short_title}
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration= {500}
                 >
                   {elem.short_title}
                 </Link>
               </li>
              )}
            </ul>
          </div>
          {book.contents.pre.map((elem, index, array) =>
            <section className={elem.short_title} key={index}>
              {elem.content}
              <br/>
              <button className="depthButton" onClick={this.scrollToTop}>Back to top</button>
            </section>
          )}
          </div>
      </div>
    );
  }
}

export default  inject('EdlizStore')(observer(Information))
