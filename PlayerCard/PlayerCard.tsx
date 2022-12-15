import * as React from 'react';
import { useState } from 'react';

import {
  ButtonGroup,
  Button,
  Switch,
  Typography,
  Slider,
  IconButton,
  Popover,
  Stack,
  Box,
} from '@mui/material';

import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


import { AlbumImage } from './styles';
import { Controls } from './Controls/Controls';

const PlayerCard = () => {
  const duration = 260; // seconds
  const [position, setPosition] = useState(0);
  const [isLiked, setLiked] = useState<boolean | null>(null);
  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };






  return (
    <Box>
      <Switch />

      <AlbumImage src="https://via.ritzau.dk/data/images/00180/311cc18f-3372-4bbd-b50f-d4a253bfb755-w_960.jpg" />

      <IconButton
        color="primary"
        component="label"
        onClick={() => {
          setLiked(isLiked === false ? null : false);
        }}
      >
        {isLiked === false ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
      </IconButton>

      <Typography variant="h6" component="h5">
        Maniac
      </Typography>

      <Typography component="span">Michael Sambello</Typography>

      <IconButton
        color="primary"
        component="label"
        onClick={() => {
          setLiked(isLiked ? null : true);
        }}
      >
        {isLiked === true ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
      </IconButton>

      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value: number) => setPosition(value)}
        marks={[
          {
            value: 0,
            label: formatDuration(position),
          },
          {
            value: duration,
            label: formatDuration(duration),
          },
        ]}
      />

      <Controls />
    </Box>
  );
};

export default PlayerCard;
