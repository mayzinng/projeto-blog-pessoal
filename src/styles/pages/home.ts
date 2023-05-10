import {styled} from '@stitches/react'

export const MainContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    width: '100vw',
    height: '100vh',

    fontFamily: 'Montserrat, sans-serif',

    background: '#D9D9D9',

    // '*': {
    //     border: '1px solid red'
    // },

    img: {

        '&:hover': {
            cursor: 'pointer'
        }
    }
})

export const Header = styled('main', {
    display: 'flex',
    justifyContent: 'center',

    borderBottom: '0.5px solid #000',

    'div:first-child': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '70vw',
        height: '4rem',

        div: {
            width: '8rem',

            button: {
                margin: '0 1.5rem',

                background: 'none',
                border: 'none',

                '&:hover': {
                    cursor: 'pointer'
                }
            },
        }
    },
})

export const SectionPosts = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',


        textarea: {
            resize: 'none',

            border: '2px solid #679850',
            outline: '0',

            padding: '0.5rem',
            width: '40rem',
            height: '10rem',

            borderRadius: '0.25rem',

            margin: '1rem 0 1rem 0',

            fontFamily: 'Montserrat, sans-serif',
            fontSize: '1rem',

            background: '#D0D0D0',
        },

        button: {
            width: '8rem',
            height: '2.5rem',

            fontSize: '1.2rem',
            fontWeight: '600',
            textTransform: 'uppercase',

            background: '#679850',
            color: '#FFF',

            borderRadius: '0.25rem',
            border: 'none',

            '&:hover': {
                cursor: 'pointer',

                background: '#326919',

                transition: 'all 0.3s'
            }
        }
    },

    'div:last-child': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        width: '38vw',
        height: '20vh',

        margin: '2.5rem 0',
        padding: '1rem',

        boxShadow: '0px 2px 6px #59B62D',
        background: '#E3E3E3',
        
        span: {
            margin: '0 0.5rem'
        },
        p: {
            display: 'flex',
            heigth: '50vh',
        }
    }
})