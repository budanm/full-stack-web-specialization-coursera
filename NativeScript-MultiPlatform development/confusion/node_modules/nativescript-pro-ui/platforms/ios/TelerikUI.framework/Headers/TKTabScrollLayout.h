//
//  TKTabScrollLayout.h
//  TelerikUI
//
//  Created by Viktor Skarlatov on 10/4/16.
//  Copyright © 2016 Telerik. All rights reserved.
//

#import "TKTabLayoutBase.h"

@interface TKTabScrollLayout : TKTabLayoutBase

@property (strong, nonatomic, readonly) UIScrollView *scrollView;
@property (assign, nonatomic) NSInteger tabSpacing;

@end
