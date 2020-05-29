import React, {useEffect, useState, Component} from 'react';
import Dropzone from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

class Previews extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
          files.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
          }));

          this.props.callbackFromParent(files[0]);

          this.setState({files})
        };
        this.state = {
          files: []
        };
      }
    //https://github.com/expressjs/multer/issues/656


    //   componentWillUnmount() {
    //     // Make sure to revoke the data uris to avoid memory leaks
    //     this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
    //   }

    //   useEffect(() => () => {
    //     // Make sure to revoke the data uris to avoid memory leaks
    //     files.forEach(file => URL.revokeObjectURL(file.preview));
    //   }, [files]);

      render() {

        const thumbs = this.state.files.map(file => (
            <div style={thumb} key={file.name}>
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        style={img}
                    />
                </div>
            </div>
        ));
    
        return (
          <Dropzone onDrop={this.onDrop} accept="image/*" minSize={1} > 
            {({getRootProps, getInputProps}) => (
              <section style={{borderStyle:"dashed", borderColor:"#fc6963"}}>
                <div {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop Pokemon Image</p>
                </div>
                <aside style={thumbsContainer}>
                  {thumbs}
                </aside>
              </section>
            )}
          </Dropzone>
        );
      }
}


export default Previews