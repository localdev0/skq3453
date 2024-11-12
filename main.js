document.addEventListener('DOMContentLoaded', () => {
  // Create the necessary elements
  const body = document.querySelector('body');
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  body.style.fontFamily = 'Arial, sans-serif';
  body.style.display = 'flex';
  body.style.justifyContent = 'center';
  body.style.alignItems = 'center';
  body.style.height = '100vh';
  body.style.margin = '0';
  body.style.flexDirection = 'column';

  // Create the frame div
  const frame = document.createElement('div');
  frame.classList.add('frame');
  frame.style.border = '3px solid rgb(51, 51, 51)';
  frame.style.padding = '20px';
  frame.style.borderRadius = '15px';
  frame.style.display = 'inline-block';
  frame.style.textAlign = 'center';

  // Create the fade text
  const fadeText = document.createElement('div');
  fadeText.classList.add('fade-text');
  fadeText.textContent = 'SHADOW.CC, BEST HUBS OUT THERE';
  fadeText.style.fontSize = '3em';
  fadeText.style.fontWeight = 'bold';
  fadeText.style.textAlign = 'center';
  fadeText.style.animation = 'fadeIn 3s ease-in-out infinite alternate';
  
  // Append fade text to the frame
  frame.appendChild(fadeText);

  // Create the "Copy BBL Script" button
  const copyButton = document.createElement('button');
  copyButton.classList.add('copy-button');
  copyButton.textContent = 'Copy BBL Script';
  copyButton.style.backgroundColor = '#32cd32';
  copyButton.style.color = 'white';
  copyButton.style.border = 'none';
  copyButton.style.borderRadius = '15px';
  copyButton.style.padding = '10px 20px';
  copyButton.style.fontSize = '1.2em';
  copyButton.style.cursor = 'pointer';
  copyButton.style.marginTop = '15px';
  copyButton.addEventListener('click', () => {
    const text = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Shadowcc-git/Shadow.CCC/refs/heads/main/Basketball/Legends/Shadow.cc"))()';
    navigator.clipboard.writeText(text).then(() => {
      alert("Script copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

  // Create the "FF2" button
  const copyFF2Button = document.createElement('button');
  copyFF2Button.classList.add('copy-button-ff2');
  copyFF2Button.textContent = 'FF2';
  copyFF2Button.style.backgroundColor = '#32cd32';
  copyFF2Button.style.color = 'white';
  copyFF2Button.style.border = 'none';
  copyFF2Button.style.borderRadius = '15px';
  copyFF2Button.style.padding = '10px 20px';
  copyFF2Button.style.fontSize = '1.2em';
  copyFF2Button.style.cursor = 'pointer';
  copyFF2Button.style.marginLeft = '10px';
  copyFF2Button.style.marginTop = '15px';
  copyFF2Button.addEventListener('click', () => {
    const text = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Shadowcc-git/Shadow.CCC/refs/heads/main/MobilesSupport/shadow.cc/best%20free%20script"))()';
    navigator.clipboard.writeText(text).then(() => {
      alert("FF2 Script copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

  // Append buttons to the frame
  frame.appendChild(copyButton);
  frame.appendChild(copyFF2Button);

  // Append the frame to the body
  body.appendChild(frame);

  // Create the link to shadow.cc/home
  const link = document.createElement('a');
  link.href = 'https://shadow.cc/home';
  link.classList.add('link');
  link.textContent = 'Visit Shadow.cc Home';
  link.style.color = '#999999';
  link.style.textDecoration = 'none';
  link.style.marginTop = '20px';
  link.style.fontSize = '1.5em';
  link.addEventListener('mouseover', () => {
    link.style.color = 'white';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#999999';
  });

  // Append link to the body
  body.appendChild(link);

  // Add keyframes animation for fade text
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0.3;
      }
      to {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(styleSheet);
});
