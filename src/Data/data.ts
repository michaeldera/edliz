import React from 'react';

import { chapter_one } from './Chapters/chapter_one';
import { chapter_two } from './Chapters/chapter_two';
import { chapter_three } from './Chapters/chapter_three';
import { chapter_four } from './Chapters/chapter_four';
import { chapter_five } from './Chapters/chapter_five';
import { chapter_six } from './Chapters/chapter_six';
import { chapter_seven } from './Chapters/chapter_seven';
import { chapter_eight } from './Chapters/chapter_eight';
import { chapter_nine } from './Chapters/chapter_nine';
import { chapter_ten } from './Chapters/chapter_ten';
import { chapter_eleven } from './Chapters/chapter_eleven';
import { chapter_twelve } from './Chapters/chapter_twelve';
import { chapter_thirteen } from './Chapters/chapter_thirteen';
import { chapter_fourteen } from './Chapters/chapter_fourteen';
import { chapter_fifteen } from './Chapters/chapter_fifteen';
import { chapter_sixteen } from './Chapters/chapter_sixteen';
import { chapter_seventeen } from './Chapters/chapter_seventeen';
import { chapter_eighteen } from './Chapters/chapter_eighteen';
import { chapter_nineteen } from './Chapters/chapter_nineteen';
import { chapter_twenty } from './Chapters/chapter_twenty';
import { chapter_twentyone } from './Chapters/chapter_twentyone';
import { chapter_twentytwo } from './Chapters/chapter_twentytwo';
import { chapter_twentythree } from './Chapters/chapter_twentythree';
import { chapter_twentyfour } from './Chapters/chapter_twentyfour';
import { chapter_twentyfive } from './Chapters/chapter_twentyfive';
import { chapter_twentysix } from './Chapters/chapter_twentysix';
import { chapter_twentyseven } from './Chapters/chapter_twentyseven';
import { chapter_twentyeight } from './Chapters/chapter_twentyeight';
import { chapter_twentynine } from './Chapters/chapter_twentynine';
import { chapter_thirty } from './Chapters/chapter_thirty';
import { chapter_thirtyone } from './Chapters/chapter_thirtyone';
import { chapter_thirtytwo } from './Chapters/chapter_thirtytwo';
import { chapter_thirtythree } from './Chapters/chapter_thirtythree';
import { chapter_thirtyfour } from './Chapters/chapter_thirtyfour';
import { chapter_thirtyfive } from './Chapters/chapter_thirtyfive';
import { chapter_thirtysix } from './Chapters/chapter_thirtysix';

import { acknowledgements } from './Information/acknowledgements';
import { foreword } from './Information/foreword';
import { major_highlights } from './Information/major_highlights';
import { preface } from './Information/preface';
import { seventh_edition } from './Information/seventh_edition';

interface BChapters {
  short_title: string;
  long_title: string;
  content: JSX.Element;
}
export interface Chapters extends BChapters {
  subsections?: BChapters[];
}
export interface Contents {
  chapters: Chapters[],
  pre: Chapters[]
}
export interface IBooks {
  short_title: string
  long_title: string
  contents: Contents
}

export const book: IBooks = {
    short_title: "EDLIZ",
    long_title: "The Essential Medicines List for Zimbabwe",
    contents: {
      chapters: [
        chapter_one,
        chapter_two,
        chapter_three,
        chapter_four,
        chapter_five,
        chapter_six,
        chapter_seven,
        chapter_eight,
        chapter_nine,
        chapter_ten,
        chapter_eleven,
        chapter_twelve,
        chapter_thirteen,
        chapter_fourteen,
        chapter_fifteen,
        chapter_sixteen,
        chapter_seventeen,
        chapter_eighteen,
        chapter_nineteen,
        chapter_twenty,
        chapter_twentyone,
        chapter_twentytwo,
        chapter_twentythree,
        chapter_twentyfour,
        chapter_twentyfive,
        chapter_twentysix,
        chapter_twentyseven,
        chapter_twentyeight,
        chapter_twentynine,
        chapter_thirty,
        chapter_thirtyone,
        chapter_thirtytwo, 
        chapter_thirtythree,
        chapter_thirtyfour,
        chapter_thirtyfive,
        chapter_thirtysix],
      pre: [
        seventh_edition,
        acknowledgements,
        foreword,
        preface,
        major_highlights]
    }
  };
