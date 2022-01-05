import React, { useEffect, useState } from 'react';
import './App.css';
import BasicList from './BasicList';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Input } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {

  let selectedFiles = []
  const [selectedFile, setSelectedFile] = useState(null)
  const [files, setFiles] = useState([])
  const [uploaded, setUploaded] = useState(0)
  const [page, setPage] = useState(0)
  const [mike, setMike] = useState(false)
  const [jon, setJon] = useState(false)
  const [nick, setNick] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/files').then(result => {
      setFiles(result.data)
    })
  }, [])

  const onFileChange = event => selectedFiles = event.target.files

  const onFileUpload = () => {

    const config = {
      onUploadProgress: progressEvent => {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        setUploaded(percentCompleted)
      },
      headers: {
        'assignees': (mike ? 'Mike-' : '') + (jon ? 'Jon-' : '') + (nick ? 'Nick' : '')
      }
    }

    const formData = new FormData()
    Array.prototype.forEach.call(selectedFiles, file => formData.append('file', file))
    axios.post('http://localhost:3001/upload', formData, config).then(result => {
      setFiles(result.data)
    })

  }

  const remove = () => {

    const config = {
      headers: {
        'file': selectedFile
      }
    }

    axios.post('http://localhost:3001/delete', {}, config).then(result => {
      setFiles(result.data)
    })

  }

  return (

    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#d3d3d3', overflow: 'hidden' }}>

      <div style={{ margin: 'auto', width: '50%', paddingTop: '10px', textAlign: 'center', color: '#292929', fontSize: '35px' }}>File Manager</div>

      <center style={{ paddingTop: '20px' }}>
        <Input type="file" inputProps={{ multiple: true, accept: '.pdf, .html' }} onChange={onFileChange} />
        <Button variant="contained" color='success' onClick={onFileUpload} style={{ marginRight: '10px', marginLeft: '10px' }}>Upload</Button>
        <Button variant="contained" color='error' onClick={remove}>Delete</Button><br></br>
        <FormControlLabel control={<Checkbox onChange={() => setMike(!mike)} />} label='Mike' />
        <FormControlLabel control={<Checkbox onChange={() => setJon(!jon)} />} label='Jon' />
        <FormControlLabel control={<Checkbox onChange={() => setNick(!nick)} />} label='Nick' /><br></br>
        <progress max='100' value={uploaded}></progress><br></br>
        <Button variant="contained" color='success' onClick={() => page > 0 ? setPage(page - 1) : null} style={{ marginRight: '10px', marginLeft: '10px', marginTop: '10px' }}>Prev</Button>
        <Button variant="contained" color='success' onClick={() => files.length > (page + 1) * 10 ? setPage(page + 1) : null} style={{ marginTop: '10px' }}>Next</Button><br></br>
      </center>

      <BasicList files={files.slice(page, page + 10 < files.length ? page + 10 : files.length)} func={setSelectedFile} />

    </div>

  )

}

export default App;
