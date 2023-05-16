import {styled} from '@stitches/react'

export const MainContainer = styled('main', {
    background: 'radial-gradient(81.17% 234.62% at 15.16% 12.24%, #469EF0 0.18%, rgba(124, 255, 231, 0.85) 42.71%, #8AD965 92.71%)',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',

    display: 'flex',
    justifyContent: 'center',

    width: '100vw',
    height: '100vh',

    fontFamily: 'Montserrat, sans-serif',

  
})

export const Container = styled('section', {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '40vw',
        height: '80vh',

        h1: {
            fontSize: '4rem',
            fontWeight: '400'
        },

        img: {
            marginLeft: '1rem'
        },

        form: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            width: '32rem',
            height:'25rem',

            background: '#FFF',
            padding: '1.5rem 2rem',
            borderRadius: '0.5rem',

            label: {
                fontSize: '1.5rem',

                margin: '1.5rem 0 0.5rem'
            },

            input: {
                height: '2.5rem',

                padding: '0.5rem',

                fontSize: '1rem',

                border: 'none',
                background: '#E6E6E6',
                outline: 'none',
                boxShadow: '0 0 0 0', 
            },

            button: {
                width: '10rem',
                height: '2.5rem',

                borderRadius: '0.5rem',
                border: '0 none',

                fontSize: '1.2rem',
                fontWeight: '500',

                marginTop: '1.5rem',

                background: '#59B62D',

                '&:hover': {
                    cursor: 'pointer',

                    background: '#326919',

                    transition: 'all 0.3s'
                }
            }
        }
    },
})