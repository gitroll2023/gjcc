const fs = require('fs');
const path = require('path');

// Simple WAV/MP3 duration estimation
// Note: This is a rough estimate. For accurate duration, use a proper audio library

function getWavDuration(filePath) {
  const buffer = fs.readFileSync(filePath);
  // WAV files have sample rate at bytes 24-27 and byte rate at 28-31
  const sampleRate = buffer.readUInt32LE(24);
  const byteRate = buffer.readUInt32LE(28);
  const fileSize = buffer.length;
  const duration = (fileSize - 44) / byteRate; // 44 is WAV header size
  return duration;
}

function getMp3Duration(filePath) {
  // For MP3, this is just an estimate based on file size and bitrate
  // Assuming 128 kbps bitrate (common default)
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;
  const bitrate = 128000; // 128 kbps in bits per second
  const duration = (fileSizeInBytes * 8) / bitrate;
  return duration;
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

const podcastDir = path.join(__dirname, '..', 'public', 'podcast');

const episodes = [
  { 
    folder: 'Ep01 원데이클래스',
    file: 'Ep01. 딱_하루의_기적__원데이클래스로_찾은_성취감과_새로운_일상.mp3',
    type: 'mp3'
  },
  {
    folder: 'Ep02 문화예술공연',
    file: 'Ep02. 문화예술공연을 하는 이유.wav',
    type: 'wav'
  },
  {
    folder: 'Ep03 유창성착각',
    file: 'Ep03. 유창성 착각.wav',
    type: 'wav'
  }
];

episodes.forEach(episode => {
  try {
    const filePath = path.join(podcastDir, episode.folder, episode.file);
    let duration;
    
    if (episode.type === 'wav') {
      duration = getWavDuration(filePath);
    } else {
      duration = getMp3Duration(filePath);
    }
    
    console.log(`${episode.folder}: ${formatDuration(duration)}`);
  } catch (error) {
    console.log(`${episode.folder}: Unable to get duration`);
  }
});