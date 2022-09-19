import { Range } from 'react-range';

export default function FractalzSlider(props: {sliderState: any,setSliderState: any,min:number,max:number}){
    return (
        <>
            {props.min < props.max && <Range
                step={1}
                min={props.min}
                max={props.max}
                values={props.sliderState.values}
                onChange={(values) => props.setSliderState({ values })}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '100%',
                        }}
                        className={"bg-[rgba(255,255,255,0.25)] rounded-full"}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '16px',
                            width: '8px',
                        }}
                        className={"rounded-full bg-white"}
                    />
                )}
            />}
        </>
    )
}
