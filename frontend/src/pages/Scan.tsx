import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import trashIcon from '../assets/trash-icon.svg';
import './Scan.css';


const API_BASE_URL = "http://127.0.0.1:5000";


const MAX_FILE_SIZE_MB = 10;
const COOLDOWN_TIME = 60000;


export default function Scan() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
 
  const [_, setAttempts] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);


  const inputRef = useRef<HTMLInputElement>(null);
}