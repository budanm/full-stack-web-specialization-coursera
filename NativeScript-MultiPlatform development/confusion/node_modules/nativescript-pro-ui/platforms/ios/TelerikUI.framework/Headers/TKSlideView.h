//
//  TKSlideView.h
//  TelerikUI
//
//  Created by Viktor Skarlatov on 11/18/16.
//  Copyright © 2016 Telerik. All rights reserved.
//

#ifndef TK_SLIDE_VIEW
#define TK_SLIDE_VIEW

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, TKSwipeDirection) {
    TKSwipeDirectionHorizontal,
    TKSwipeDirectionVertical
};

@protocol TKSlideViewDelegate <NSObject>

@optional
- (BOOL) slideViewWillSlideToView: (UIView *) view;
- (void) slideViewDidSlideToView: (UIView *) view;

@end

@interface TKSlideView : UIView

@property (weak, nonatomic) id<TKSlideViewDelegate> delegate;
@property (assign, nonatomic) BOOL disableSwipe;
@property (assign, nonatomic) TKSwipeDirection slideDirection;
@property (strong, nonatomic) UIView *currentView;

- (void) next;
- (void) previous;

@end

#endif
