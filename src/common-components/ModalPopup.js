import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import copy from "copy-to-clipboard";
import { CodeBlock, dracula } from "react-code-blocks";

export const ModalPopup = (props, showLineNumbers) => {

    const [openTab, setOpenTab] = useState(1);

    const copyToClipboard = () => {
        toast.success('HTML code copied!');
    }
    const copyCSS = () => {
        toast.success('CSS code copied!');
    }
    let beautify_html = require('js-beautify').html; // HTML string to Indented HTML
    let indentedHTML = beautify_html(props.copyHTMLCode).replace('&nbsp;', ' ')

    return (
        <>
            <div class="modal fade" id={`${props.name}${props.id}`} tabIndex="-1" aria-labelledby={`ModalLabel${props.name}${props.id}`} aria-modal="true" role="dialog">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-label" id={`ModalLabel${props.name}${props.id}`}>
                                <ul className="modal-nav">
                                    <li className='txt-mar'>
                                        <a
                                            href="#"
                                            onClick={() => { setOpenTab(1); copyToClipboard(); copy(`${indentedHTML}`) }}
                                            className={`modal-btn-txt ${openTab === 1 ? "btn-bg-white" : ""} `}
                                        >
                                            Copy HTML Code
                                        </a>
                                    </li>
                                    <li className='txt-flex'>
                                        <a
                                            href="#"
                                            onClick={() => { setOpenTab(2); copyCSS(); copy(`${props.copyCSSCode}`) }}
                                            className={`modal-btn-txt ${openTab === 2 ? "btn-bg-black" : ""} `}
                                        >
                                            Copy CSS Code
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" class="modal-crs-btn"
                                data-bs-dismiss="modal" aria-label="Close"><svg height="1em" fill="#fff" viewBox="0 0 384 512"><path d="M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"/></svg></button>
                        </div>
                        <div class="modal-body">
                            <section className={`inner-modal`}>
                                <div className="docs-pills">
                                    <div className="tab-content">
                                        <div className="tab-pane active show " id="mdb_6271df0c5d97c50300ff7765ac4c9e495150c579" role="tabpanel">
                                            <div className="code-toolbar">
                                                <pre className={`${openTab === 1 ? "block" : "hidden"}`}>
                                                    <CodeBlock
                                                        text={indentedHTML}
                                                        showLineNumbers={showLineNumbers}
                                                        theme={dracula}
                                                    />
                                                </pre>
                                                <pre className={`${openTab === 2 ? "block" : "hidden"}`}>
                                                    <CodeBlock
                                                        text={props.copyCSSCode}
                                                        showLineNumbers={showLineNumbers}
                                                        theme={dracula}
                                                    />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}
