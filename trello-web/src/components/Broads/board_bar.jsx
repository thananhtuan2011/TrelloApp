import { Avatar, AvatarGroup, Box, Button, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import avatar from '../../assets/image/avatar.png'
import PublicIcon from '@mui/icons-material/Public';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import { fetchGetBoard } from '../../apis/board.api';
function Board_bar(props) {
    const { t, i18n } = useTranslation();
    const [boards, setBoard] = React.useState([])
    const {_id}=props
    useEffect(()=> {
        console.log("_id_id_id",_id);
        fetchGetBoard(_id).then(res=>
        {
            setBoard(res)
        }
        )
    },[_id])
  
    return (
        
        <div className=' text-white flex w-full overflow-x-auto' style={{ minWidth: '100rem' }}>
            <Box className=' flex w-2/4 items-center justify-between'>
                <div>
                    {/* {t('welcome')} */}
                    <BackupTableIcon ></BackupTableIcon>
                    <span className='pl-1'>{boards.title}</span>
                </div>
                <div>
                    <PublicIcon ></PublicIcon>
                    <span className='pl-1'>Publich</span>
                </div>
                <div>
                    <AddToDriveIcon ></AddToDriveIcon>
                    <span className='pl-1'>Add to Google Drive</span>
                </div>
                <div>
                    <BoltIcon ></BoltIcon>
                    <span className='pl-1'>Automation</span>
                </div>
                <div>
                    <FilterListIcon ></FilterListIcon>
                    <span className='pl-1'>Fillters</span>
                </div>

            </Box>
            <Box className='w-2/4 justify-end flex text-white '>
                <Button variant="white" startIcon={<PersonAddIcon />}>
                    <span>Invite</span>
                </Button>
                <AvatarGroup className='ml-2' total={14}>
                    <Avatar alt="Remy Sharp" src={avatar} />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Box>
        </div>


    );
}

export default Board_bar;