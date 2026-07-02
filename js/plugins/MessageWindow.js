/*:
 * @target MZ
 * @plugindesc メッセージウィンドウのサイズを変えるプラグイン
 * @author Becky
 * @url https://games-p.com/
 * @help
 * メッセージウィンドウのサイズを変えることが出来るプラグインです。
 * 
 * @command open
 * @arg w_width
 * @type number
 * @text 幅
 * @desc メッセージウィンドウの幅を入力して下さい
 * @default 
 *
 * @arg w_height
 * @type number
 * @text 高さ
 * @desc メッセージウィンドウの高さを入力して下さい
 * @default 
 *
 * @arg w_x
 * @type number
 * @text X座標
 * @desc メッセージウィンドウを表示したいX座標を入力して下さい
 * @default 
 */

(() => {
	"use strict";
	
    const pluginName = "MessageWindow";

    PluginManager.registerCommand(pluginName, "open", args => {
    
    let messageWindow = Window_Message.prototype.updatePlacement;
	Window_Message.prototype.updatePlacement = function() {
	messageWindow.call(this);
	this.width = args.w_width;
	this.height = args.w_height;
	this.x = args.w_x;
	};
	
    });
})();