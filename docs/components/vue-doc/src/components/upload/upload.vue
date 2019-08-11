<template>
    <div class="page-box salus-scrollbar layout" ref="page">
        <div class="detail-box">
            <h1>Upload 上传</h1>
            <p>文件的选择上传控件。</p>
        </div>

        <!--基础上传控件-->
        <div class="detail-box">
            <h2>基础上传控件</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础上传控件结束-->

        <!--上传列表显示位置-->
        <div class="detail-box">
            <h2>上传列表显示位置</h2>
            <p>默认显示在按钮下方。</p>
            <p class="code-left-line">Demo</p>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" position="top" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--上传列表显示位置结束-->

        <!--上传列表-->
        <div class="detail-box">
            <h2>上传列表</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" :defaultFileList="fileList" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeFileList"></search-code>
        </div>
        <!--上传列表结束-->

        <!--过滤器-->
        <div class="detail-box">
            <h2>过滤器</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" :fileList="filterList" :multiple="true" @change="handleChange" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeFileList"></search-code>
        </div>
        <!--过滤器结束-->

        <!--图片列表-->
        <div class="detail-box">
            <h2>图片列表</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload action="https://jsonplaceholder.typicode.com/posts/" listType="picture" :defaultFileList="pictureList" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodePictureStyle"></search-code>
        </div>
        <!--图片列表结束-->

        <!--图片上传-->
        <div class="detail-box">
            <h2>图片上传</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeAvatar"></search-code>
        </div>
        <!--图片上传结束-->

        <!--图片上传列表-->
        <div class="detail-box">
            <h2>图片上传列表</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodePictureCard"></search-code>
        </div>
        <!--图片上传列表结束-->

        <!--可拖拽/多选/限制数量上传-->
        <div class="detail-box">
            <h2>可拖拽/多选/限制数量上传</h2>
            <p class="code-left-line">Demo</p>
            <div class="upload-demo">
                <sl-upload-dragger name="file" :multiple="true" action="https://jsonplaceholder.typicode.com/posts/" @change="dragChange">
                    <p class="ns-upload-drag-icon">
                        <i class="salus-icon-empty-info-o"></i>
                    </p>
                    <p class="ns-upload-text">单击或拖动文件到此区域上传</p>
                    <p class="ns-upload-hint">支持单个或批量上传。严禁上传公司数据相关的文件</p>
                </sl-upload-dragger>
            </div>
            <search-code :code="CodeDrag"></search-code>
        </div>
        <!--可拖拽/多选/限制数量上传结束-->

        <!--手动上传-->
        <div class="detail-box">
            <h2>手动上传</h2>
            <p class="code-left-line">Demo</p>
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
            <search-code :code="CodeManually"></search-code>
        </div>
        <!--手动上传结束-->

        <!--错误显示重传按钮-->
        <div class="detail-box">
            <h2>错误显示重传按钮</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload :defaultFileList="reUploadList" reUploadButtonVisible action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeReupload"></search-code>
        </div>
        <!--错误显示重传按钮结束-->

        <!--自定义上传-->
        <div class="detail-box">
            <h2>自定义上传</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload :customRequest="customRequest" action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeCustomUpload"></search-code>
        </div>
        <!--自定义上传结束-->

        <!--自定义分片上传结合错误续传-->
        <div class="detail-box">
            <h2>自定义分片上传结合错误续传</h2>
            <p class="code-left-line">Demo</p>
            <sl-upload :customRequest="customBrustRequest" resumeButtonVisible @resume="resume" action="https://jsonplaceholder.typicode.com/posts/" >
                <sl-button icon>
                    <i class="salus-icon-upload-o" /> 点击上传
                </sl-button>
            </sl-upload>
            <search-code :code="CodeCustomChunkUpload"></search-code>
        </div>
        <!--自定义上传结束-->

        <!--参数说明开始-->
        <div class="detail-box" id="API">
            <h2>API</h2>
            <p class="row-in-round" id="Anchor-Props">sl-upload</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>accept</td>
                    <td>接受上传的文件类型,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>action</td>
                    <td>上传的地址</td>
                    <td>string|(file) => Promise</td>
                    <td></td>
                </tr>
                <tr>
                    <td>directory</td>
                    <td>支持上传文件夹</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>beforeUpload</td>
                    <td>上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法。</td>
                    <td>(file, fileList) => boolean | Promise</td>
                    <td></td>
                </tr>
                <tr>
                    <td>customRequest</td>
                    <td>通过覆盖默认的上传行为，可以自定义自己的上传实现</td>
                    <td>function</td>
                    <td></td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>上传所需参数或返回上传参数的方法</td>
                    <td>object|(file) => object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>defaultFileList</td>
                    <td>默认已经上传的文件列表</td>
                    <td>object[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>fileList</td>
                    <td>已经上传的文件列表（受控），需要配合change事件</td>
                    <td>object[]</td>
                    <td></td>
                </tr>

                <tr>
                    <td>headers</td>
                    <td>设置上传的请求头部，IE10 以上有效</td>
                    <td>object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>listType</td>
                    <td>上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card</td>
                    <td>string</td>
                    <td>'text'</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>发到后台的文件参数名</td>
                    <td>string</td>
                    <td>'file'</td>
                </tr>
                <tr>
                    <td>showUploadList</td>
                    <td>是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon</td>
                    <td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>supportServerRender</td>
                    <td>服务端渲染时需要打开这个</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>withCredentials</td>
                    <td>上传请求时是否携带 cookie</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>openFileDialogOnClick</td>
                    <td>点击打开文件对话框</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>remove</td>
                    <td>点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除</td>
                    <td>Function(file): boolean | Promise</td>
                    <td></td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>上传列表显示位置</td>
                    <td>'bottom' | 'top'</td>
                    <td>'bottom'</td>
                </tr>
                <tr>
                    <td>reUploadButtonVisible</td>
                    <td>当上传错误时显示重传按钮</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>resumeButtonVisible</td>
                    <td>当上传错误时显示续传按钮</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-upload 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">事件名称</th>
                    <th width="70%">说明</th>
                    <th width="15%">回调参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>change</td>
                    <td>上传文件改变时的状态</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>preview</td>
                    <td>点击文件链接或预览图标时的回调</td>
                    <td>Function(file)</td>
                </tr>
                <tr>
                    <td>resume</td>
                    <td>续传时的回调</td>
                    <td>Function(file)</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">change</p>
            <p>上传中、完成、失败都会调用这个函数</p>
            <p>文件状态改变的回调，返回为:</p>
            <search-code :code="changeParams" :expand="true" :visibleTitle="false"></search-code>
            <p>1、file 当前操作的文件对象</p>
            <search-code :code="changeFileParam" :expand="true" :visibleTitle="false"></search-code>
            <p>2、fileList 当前的文件列表</p>
            <p>3、event 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持</p>
        </div>
        <!--position-->
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodePosTop, CodeFileList, CodeFilter, CodePictureStyle, CodeAvatar, CodePictureCard, CodeDrag, CodeManually, CodeReupload, CodeCustomUpload, CodeCustomChunkUpload, changeParams, changeFileParam } from "./upload.code";

    const getBase64 = (img, callback) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => callback(reader.result))
      reader.readAsDataURL(img)
    }
    export default {
        data() {
            return {
              CodeBasic,
              CodePosTop,
              CodeFileList,
              CodeFilter,
              CodePictureStyle,
              CodeAvatar,
              CodePictureCard,
              CodeDrag,
              CodeManually,
              CodeReupload,
              CodeCustomUpload,
              CodeCustomChunkUpload,
              changeParams,
              changeFileParam,
              fileList: [{ // 上传列表
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
              filterList: [{ // 过滤器
                uid: '-1',
                name: 'pictureA.png',
                status: 'done',
                url: require('../../assets/imgs/card-example.png'),
              }],
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
              imageUrl: '', // 图片上传-url
              loading: false, // 图片上传-loading
              pictureUploadList: [{ // 图片上传列表
                uid: '1',
                name: 'pictureA.png',
                status: 'done',
                url: require('../../assets/imgs/card-example.png'),
              }],
              previewVisible: false, // 图片上传列表-可预览
              previewImage: '', // 图片上传列表-img预览路径
              handleList: [], // 手动上传
              uploading: false, // 收到上传-uploading
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
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
          /**
           * 过滤器-change
           */
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
          /**
           * 图片上传-change
           */
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
          /**
           * 图片上传-upload前
           */
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
          /**
           * 图片上传列表-图片预览取消
           */
          handleCancel () {
            this.previewVisible = false
          },
          /**
           * 图片上传列表-图片预览
           */
          handlePreview (file) {
            this.previewImage = file.url || file.thumbUrl
            this.previewVisible = true
          },
          /**
           * 图片上传列表-change
           */
          pictureUploadChange ({ fileList }) {
            this.pictureUploadList = fileList
          },
          /**
           * 可拖拽/多选/限制数量上传-change
           */
          dragChange(info) {
            const status = info.file.status;
            if (status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (status === 'done') {
              this.$message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
              this.$message.error(`${info.file.name} file upload failed.`);
            }
          },
          /**
           * 手动上传-remove
           */
          handleRemove(file) {
            const index = this.handleList.indexOf(file);
            const newFileList = this.handleList.slice();
            newFileList.splice(index, 1);
            this.handleList = newFileList
          },
          /**
           * 手动上传-before upload
           */
          beforeHandleUpload(file) {
            this.handleList = [...this.handleList, file]
            return false;
          },
          /**
           * 手动上传-upload
           */
          handleUpload() {
            const { handleList } = this;
            const formData = new FormData();
            handleList.forEach((file) => {
              formData.append('files[]', file);
            });
            this.uploading = true

            // You can use any AJAX library you like
            setTimeout(() => {
              this.handleList = []
              this.uploading = false
              this.$message.success('upload successfully.');
            }, 2000);
          },
          /**
           * 自定义请求
           */
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
          },
          /**
           * 自定义分片请求
           */
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
          /**
           * 续传
           */
          resume(item) {
            console.log(item, 'resume');
            // 续传业务逻辑
          }
        }
    }
</script>
<style scoped>
    .upload-demo {
        width: 450px;
    }
</style>