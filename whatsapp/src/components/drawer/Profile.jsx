import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccContext } from '../../context/Provider'


const ImageComp = styled(Box)`
    display : flex;
    justify-content : center;

`

const Image = styled("img")({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "25px 0"

})

const BoxWrapper = styled(Box)`
    background : #fff;
    padding: 12px 30px 2px;
    box-shodow: 0 1px 3px rgba(0,0,0,0.08);
    & : first-child {
        font-size: 14px;
        color: #009688;
        font-weight:200;

    }
    & : last-child {
        margin : 14px 0;
        color: #4a4a4a
    }


`
const Description = styled(Box)`
    padding : 15px 20px 28px 30px;
    & > p {
        font-size : 13px;
        color : #8696a0;

    }

`
export const Profile = () => {


    const { acc } = useContext(AccContext)
    return (
        <>
            <ImageComp>
                <Image src={acc.picture} alt="" />
            </ImageComp>
            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{acc.name}</Typography>
            </BoxWrapper>
            <Box>
                <Description>This is not your username or pin. This name will be visible to your WhatsApp contacts</Description>
            </Box>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography> The Only Way Is  <span style={{textDecoration:"line-through"}}>Through</span></Typography>
            </BoxWrapper>
        </>
    )
}
