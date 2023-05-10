import { styled } from '@stitches/react'


export const MainContainer = styled('main', {
    background: 'radial-gradient(81.17% 234.62% at 15.16% 12.24%, #469EF0 0.18%, rgba(124, 255, 231, 0.85) 42.71%, #8AD965 92.71%)',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',

    fontFamily: 'Montserrat, sans-serif',

    // '*': {
    //     border: '1px solid red'
    // }
})

export const Container = styled('section', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    width: '100vw',
    height: '50vh',

    fontWeight: '400',

    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',

        width: '35vw',
        height: '50vh',
        padding: '5rem',


        h1: {
            fontSize: '3rem',

            fontWeight: '500',
            letterSpacing: '-0.11em',
        },

        h3: {
            fontSize: '2rem',

            fontWeight: '400'
        },

        button: {
            width: '10rem',
            height: '3rem',

            fontSize: '1.5rem',

            marginTop: '1.5rem',

            border: '4px solid #000000',
            borderRadius: '0.5rem',

            background: '#CCCCCC',
            color: '#204000',

            '&:hover': {
                cursor: 'pointer',

                background: 'none',
                transition: 'all 0.7s'
            }
        }
    },
    'div:last-child': {
        button: {
            background: 'none',
            color: '#000',

            '&:hover': {
                cursor: 'pointer',

                background: '#CCCCCC',
                transition: 'all 0.3s'
            }
        }
    }
})