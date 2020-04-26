import React, {useReducer, Reducer, useRef, useMemo} from 'react'
import './preferences.css'
import Overlay from '../../views/Overlay/Overlay'
import {DrawerButton} from './DrawerButton'
import ModeButton from './ModeButton'
import {IEdlizStore} from '../../stores/EdlizStore'
import produce from 'immer'
import { DefaultButton, IIconProps } from '@fluentui/react'

interface PreferencesProps extends Omit<IEdlizStore, 'navigation' | 'toggleNavigationPanel' | 'books'> {}

type EventType = React.TouchEvent<HTMLDivElement>

type State = {
    isDragging: boolean
    yPosition: number | null
    bottom: number | string
}

type Action =
    | {
          type: 'SET_DRAGGING'
          drag: boolean
      }
    | {
          type: 'SET_POSITION'
          position: number | null
      }
    | {
          type: 'SET_BOTTOM'
          value: number | string
      }

const reducer: Reducer<State, Action> = (state, action) => {
    return produce(state, (draftState) => {
        switch (action.type) {
            case 'SET_DRAGGING':
                draftState.isDragging = action.drag
                break
            case 'SET_POSITION':
                draftState.yPosition = action.position
                break
            case 'SET_BOTTOM':
                draftState.bottom = action.value
                break
        }
    })
}

const Preferences: React.FC<PreferencesProps> = ({
    preferences,
    mode,
    fontSize,
    fontSizeChange,
    togglePreferences,
    toggleMode,
}) => {
    const panel = useRef<number>(0)
    const [state, dispatch] = useReducer(reducer, {
        isDragging: false,
        yPosition: null,
        bottom: 0,
    })
    const bottom = useMemo(() => (preferences === 'open' ? state.bottom : '-300px'), [preferences, state.bottom])

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        fontSizeChange(Number(event.target.value))
    }
    const handlePreferences = () => {
        togglePreferences(preferences)
    }
    const onTouchStart = (event: EventType) => {
        const offsetBottom = panel.current
        dispatch({type: 'SET_POSITION', position: offsetBottom})
        dispatch({type: 'SET_DRAGGING', drag: true})
    }

    const overlayVisibility = preferences === 'open' ? 'visible' : 'hidden'


    const night: IIconProps = { iconName: 'ClearNight' };
    const day: IIconProps = { iconName: 'Sunny' };

    return (
        <React.Fragment>
            <div className={mode + ' preferences'} style={{bottom: bottom}}>
                <DrawerButton action={handlePreferences} onDragAction={onTouchStart} />
                <section className="p-section">
                    <label htmlFor="font-size-input" className="preview-text" style={{fontSize: fontSize + 'pt'}}>
                        Preview Reading Text
                    </label>
                    <input
                        name="font-size-input"
                        className="font-size-input"
                        type="range"
                        min="10"
                        max="20"
                        value={fontSize}
                        onChange={handleFontSizeChange}
                    />
                </section>

                <DefaultButton toggle 
                    checked={mode === 'day'}
                    text={ mode === 'day' ? 'Day Mode' : 'Night Mode'}
                    iconProps={mode === 'day' ? day : night}
                    onClick={() => toggleMode(mode)}
                />
            </div>
            <Overlay visibility={overlayVisibility} dismiss={() => togglePreferences(preferences)} />
        </React.Fragment>
    )
}

export default Preferences
