/* 基础上传控件 */
export const CodeBasic = 
`    <template>
        <div>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>`

/* 上传列表显示位置 */
export const CodePosTop = 
`    <template>
        <div>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" position="top" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>`

/* 上传列表 */
export const CodeFileList = 
`    <template>
        <div>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" :defaultFileList="fileList" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                fileList: [{
                  uid: '1',
                  name: 'pictureA.png',
                  status: 'done',
                  response: 'Server Error 500', // custom error message to show
                  url: require('../../assets/imgs/card-example.png'),
                }, {
                  uid: '2',
                  name: 'pictureB.png',
                  status: 'done',
                  url: require('../../assets/imgs/card-example.png'),
                }, {
                  uid: '3',
                  name: 'pictureC.png',
                  status: 'error',
                  response: 'Server Error 500', // custom error message to show
                  url: require('../../assets/imgs/card-example.png'),
                }],
              }
            },
        }
    </script>`

/* 过滤器 */
export const CodeFilter = 
`    <template>
        <div>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" :fileList="filterList" :multiple="true" @change="handleChange" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                filterList: [{
                  uid: '-1',
                  name: 'pictureA.png',
                  status: 'done',
                  url: require('../../assets/imgs/card-example.png'),
                }],
              }
            },
            methods: {
              handleChange(info) {
                let fileList = info.fileList;
    
                // 只显示最近上传的两个文件
                fileList = fileList.slice(-2);
    
                // 读取响应并显示文件链接
                fileList = fileList.map((file) => {
                  if (file.response) {
                    // 组件将显示文件的url作为链接
                    file.url = file.response.url;
                  }
                  return file;
                });
                // 3. 过滤成功的文件
                fileList = fileList.filter((file) => {
                  if (file.response) {
                    return file.response.status === 'success';
                  }
                  return true;
                });
                this.filterList = fileList
              },
            }
        }
    </script>`

/* 图片列表 */
export const CodePictureStyle = 
`    <template>
        <div>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" listType="picture" :defaultFileList="pictureList" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                pictureList: [{ // 图片列表
                  uid: '1',
                  name: 'pictureA.png',
                  status: 'done',
                  response: 'Server Error 500', // custom error message to show
                  url: require('../../assets/imgs/card-example.png'),
                }, {
                  uid: '2',
                  name: 'pictureB.png',
                  status: 'done',
                  url: require('../../assets/imgs/card-example.png'),
                }],
              }
            },
        }
    </script>`

/* 图片上传 */
export const CodeAvatar = 
`    <template>
        <div>
            <sl-upload
                name="avatar"
                listType="picture-card"
                class="avatar-uploader"
                :showUploadList="false"
                action="https://jsonplaceholder.typicode.com/posts/"
                :beforeUpload="beforeUpload"
                @change="pictureChange"
            >
                <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                <div v-else>
                    <i v-if="!loading" class="salus-icon-plus-o"></i>
                    <i v-else class="salus-icon-loading salus-icon-loading-gray"></i>
                    <div class="color-success">点击上传</div>
                </div>
            </sl-upload>
        </div>
    </template>
    <script>
        const getBase64 = (img, callback) => {
          const reader = new FileReader()
          reader.addEventListener('load', () => callback(reader.result))
          reader.readAsDataURL(img)
        }
        export default {
            data() {
              return {
                imageUrl: '',
                loading: false,
              }
            },
            methods: {
                pictureChange(info) {
                  if (info.file.status === 'uploading') {
                    this.loading = true
                    return
                  }
                  if (info.file.status === 'done') {
                    getBase64(info.file.originFileObj, (imageUrl) => {
                      this.imageUrl = imageUrl
                      this.loading = false
                    })
                  }
                },
                beforeUpload(file) {
                  const isPNG = file.type === 'image/png'
                  if (!isPNG) {
                    this.$message.error('You can only upload PNG file!')
                  }
                  const isLt2M = file.size / 1024 / 1024 < 2
                  if (!isLt2M) {
                    this.$message.error('Image must smaller than 2MB!')
                  }
                  return isPNG && isLt2M
                },
            },
        }
    </script>`

/* 图片上传列表 */
export const CodePictureCard = 
`    <template>
        <div class="clearfix upload-demo">
            <sl-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                :fileList="pictureUploadList"
                @preview="handlePreview"
                @change="pictureUploadChange"
            >
                <div v-if="pictureUploadList.length < 3">
                    <i class="salus-icon-plus-o"></i>
                    <div class="color-success">点击上传</div>
                </div>
            </sl-upload>
            <sl-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
            </sl-modal>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                pictureUploadList: [{
                  uid: '1',
                  name: 'pictureA.png',
                  status: 'done',
                  url: require('../../assets/imgs/card-example.png'),
                }],
                previewVisible: false,
                previewImage: '',
              }
            },
            methods: {
                handleCancel () {
                  this.previewVisible = false
                },
                handlePreview (file) {
                  this.previewImage = file.url || file.thumbUrl
                  this.previewVisible = true
                },
                pictureUploadChange ({ fileList }) {
                  this.pictureUploadList = fileList
                },
            },
        }
    </script>`

/* 拖拽上传 */
export const CodeDrag = 
`    <template>
        <div class="upload-demo">
            <sl-upload-dragger name="file" :multiple="true" action="https://jsonplaceholder.typicode.com/posts/" @change="dragChange">
                <p class="ns-upload-drag-icon">
                    <i class="salus-icon-empty-info-o"></i>
                </p>
                <p class="ns-upload-text">单击或拖动文件到此区域上传</p>
                <p class="ns-upload-hint">支持单个或批量上传。严禁上传公司数据相关的文件</p>
            </sl-upload-dragger>
        </div>
    </template>
    <script>
        export default {
            methods: {
                dragChange(info) {
                    const status = info.file.status;
                    if (status !== 'uploading') {
                      console.log(info.file, info.fileList);
                    }
                    if (status === 'done') {
                      this.$message.success(\`\${info.file.name} file uploaded successfully.\`);
                    } else if (status === 'error') {
                      this.$message.error(\`\${info.file.name} file upload failed.\`);
                    }
                },
            },
        }
    </script>`

/* 手动传 */
export const CodeManually = `
    <template>
        <div class="upload-demo">
            <sl-upload
                :fileList="handleList"
                :remove="handleRemove"
                :beforeUpload="beforeHandleUpload"
            >
                <sl-button icon>
                    <i class="salus-icon-upload-o"></i><span>Select File</span>
                </sl-button>
            </sl-upload>
            <sl-button
                type="primary"
                @click="handleUpload"
                :disabled="handleList.length === 0"
                :loading="uploading"
                style="margin-top: 16px"
            >
                {{uploading ? 'Uploading' : 'Start Upload' }}
            </sl-button>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                  handleList: [], // 手动上传
                  uploading: false, // 收到上传-uploading
              }
            },
            methods: {
                handleRemove(file) {
                  const index = this.handleList.indexOf(file);
                  const newFileList = this.handleList.slice();
                  newFileList.splice(index, 1);
                  this.handleList = newFileList
                },
                beforeHandleUpload(file) {
                  this.handleList = [...this.handleList, file]
                  return false;
                },
                handleUpload() {
                  const { handleList } = this;
                  const formData = new FormData();
                  handleList.forEach((file) => {
                    formData.append('files[]', file);
                  });
                  this.uploading = true
                  
                  setTimeout(() => {
                    this.handleList = []
                    this.uploading = false
                    this.$message.success('upload successfully.');
                  }, 2000);
                },
            },
        }
    </script>`

/* 错误显示重传按钮 */
export const CodeReupload = 
`    <template>
        <div>
            <sl-upload :defaultFileList="reUploadList" reUploadButtonVisible action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                  reUploadList: [{ // 上传列表
                    uid: '1',
                    name: 'pictureA.png',
                    status: 'done',
                    response: 'Server Error 500', // custom error message to show
                    url: require('../../assets/imgs/card-example.png'),
                  }, {
                    uid: '2',
                    name: 'pictureB.png',
                    status: 'done',
                    url: require('../../assets/imgs/card-example.png'),
                  }, {
                    uid: '3',
                    name: 'pictureC.png',
                    status: 'error',
                    response: 'Server Error 500', // custom error message to show
                    url: require('../../assets/imgs/card-example.png'),
                  }],
              }
            },
        }
    </script>`

/* 自定义上传 */
export const CodeCustomUpload = 
`    <template>
        <div>
            <sl-upload :customRequest="customRequest" action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>
    <script>
        export default {
            methods: {
                customRequest(item) {
                  const formData = new FormData();
                  formData.append('file', item.file);
                  formData.append('id', '1000');
                  const xhr = new XMLHttpRequest();
                  xhr.withCredentials = true;
                  if (item.onProgress && xhr.upload) {
                    xhr.upload.onprogress = function progress(e) {
                      if (e.total > 0) {
                        e.percent = (e.loaded / e.total) * 100;
                      }
                      item.onProgress(e);
                    };
                  }
                  xhr.open('post', item.action, true);
                  xhr.onerror = function error(e) {
                    item.onError(e);
                  };
      
                  xhr.onload = function onload() {
                    item.onSuccess( xhr.responseText || xhr.response || null)
                  };
                  xhr.send(formData);
                }
            },
        }
    </script>`
    
/* 自定义分片上传结合错误续传 */
export const CodeCustomChunkUpload = 
`    <template>
        <div>
            <sl-upload :customRequest="customBrustRequest" resumeButtonVisible @resume="resume" action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
        </div>
    </template>
    <script>
        export default {
            methods: {
                customBrustRequest(item) {
                  const size = item.file.size;
                  const chunkSize = parseInt((size / 3) + '', 10);
                  const maxChunk = Math.ceil(size / chunkSize);
                  const reqs = Array(maxChunk).fill(0).map((v, index) => {
                    const start = index * chunkSize;
                    let end = start + chunkSize;
                    if (size - end < 0) {
                      end = size;
                    }
                    const formData = new FormData();
                    formData.append('file', item.file.slice(start, end));
                    formData.append('start', start.toString());
                    formData.append('end', end.toString());
                    formData.append('index', index.toString());
                    return new Promise((resolve, reject) => {
                      const xhr = new XMLHttpRequest();
                      xhr.withCredentials = true;
                      xhr.open('post', item.action, true);
                      xhr.onerror = function error(e) {
                        reject(e);
                      };
                      xhr.onload = function onload() {
                        resolve( xhr.responseText || xhr.response || null)
                      };
                      xhr.send(formData);
                    })
                  });
                  Promise.all(reqs).then(results => {
                    item.onSuccess(results);
                  }).catch(errors => {
                    item.onError(errors);
                  })
                },
                resume(item) {
                  console.log(item, 'resume');
                  \`// 续传业务逻辑\`
                }
            },
        }
    </script>`

export const changeParams =
`    {
      file: { /* ... */ },
      fileList: [ /* ... */ ],
      event: { /* ... */ },
    }`
export const changeFileParam =
`    {
       uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
       name: 'xx.png'   // 文件名
       status: 'done', // 状态有：uploading done error removed
       response: '{"status": "success"}', // 服务端响应内容
       linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
    }`

