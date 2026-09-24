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

  useEffect(() => {
    let timer: number;
    if (isRateLimited) {
      timer = setTimeout(() => {
        setIsRateLimited(false);
        setAttempts(0);
      }, COOLDOWN_TIME);
    }
    return () => clearTimeout(timer);
  }, [isRateLimited]);

  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleFileProcess = (selectedFile: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(selectedFile.type)) {
      alert("Please upload .png or .jpg file");
      return;
    }
  
  const fileSizeMB = selectedFile.size / 1024 / 1024;
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      alert(`File is too big, max ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
   
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult(null);

    








  };

}