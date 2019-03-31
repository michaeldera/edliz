import React, {Component} from 'react'
import './navigation.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem'
import ChapterImg from './chapter.png'

class Navigation extends Component {
    render() {
        const {chapter, content, title} = this.props
        return (
            <div className="screen">
                <div className="left-navigation">
                    <img className="chapter-img" src={ChapterImg} alt="" width="179" height="254" />
                    <div className="chapter-list">
                        {content.chapters.map((section, index) => (
                            <NavigationItem key={section.short_title} section={section} chapter={index + 1} />
                        ))}
                    </div>
                </div>
                <div className="chapter-content">
                    <div className="chapter-title">{title}</div>
                    <div className="chapter-title">{chapter.long_title}</div>
                    <div className="article">
                        {chapter.subsections
                            ? chapter.subsections.map(section => {
                                  return (
                                      <>
                                          <section key={section.short_title}>{section.content}</section>
                                      </>
                                  )
                              })
                            : chapter.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation
